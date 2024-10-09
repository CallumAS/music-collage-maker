package scraper

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
)

func Spotify(playlistId string) ([]string, error) {
	// Step 1: Get page for access token
	playlistUrl := fmt.Sprintf("https://open.spotify.com/playlist/%s", playlistId)

	resp, err := http.Get(playlistUrl)
	if err != nil {
		log.Println("Failed to fetch the playlist page:", err)
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Println("Failed to read the page content:", err)
		return nil, err
	}

	// Step 2: Extract the access token
	tokenRegex := `"accessToken":"([A-Za-z0-9-_]+)"`
	re := regexp.MustCompile(tokenRegex)
	match := re.FindStringSubmatch(string(body))

	if len(match) < 2 {
		log.Println("Access token not found on the page")
		return nil, fmt.Errorf("access token not found")
	}

	accessToken := match[1]
	fmt.Println("Access Token:", accessToken)

	// Step 3: Use the access token to fetch playlist data
	apiUrl := fmt.Sprintf("https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchPlaylist&variables=%%7B%%22uri%%22%%3A%%22spotify%%3Aplaylist%%3A%s%%22%%2C%%22offset%%22%%3A0%%2C%%22limit%%22%%3A200%%7D&extensions=%%7B%%22persistedQuery%%22%%3A%%7B%%22version%%22%%3A1%%2C%%22sha256Hash%%22%%3A%%2282cdf2bca2ef1a39bfb09021c43081ba45a2efee14486810899f226b0bebf917%%22%%7D%%7D", playlistId)
	println(apiUrl)
	client := &http.Client{}
	req, err := http.NewRequest("GET", apiUrl, nil)
	if err != nil {
		log.Println("Failed to create request:", err)
		return nil, err
	}

	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", accessToken))

	apiResp, err := client.Do(req)
	if err != nil {
		log.Println("Failed to fetch playlist data:", err)
		return nil, err
	}
	defer apiResp.Body.Close()

	playlistData, err := ioutil.ReadAll(apiResp.Body)
	if err != nil {
		log.Println("Failed to read playlist data:", err)
		return nil, err
	}

	// Step 4: Use regex to extract the image URLs
	imageRegex := `"height":\s*640,\s*"url":\s*"(https:\/\/[a-zA-Z0-9./_-]+)",\s*"width":\s*640`
	reImg := regexp.MustCompile(imageRegex)
	matches := reImg.FindAllStringSubmatch(string(playlistData), -1)

	if len(matches) == 0 {
		log.Println("No image URLs found")
		return nil, fmt.Errorf("no image URLs found")
	}

	// Step 5: Remove duplicates
	uniqueImages := make(map[string]struct{})
	var imageUrls []string

	for _, match := range matches {
		if len(match) > 1 {
			imageUrl := match[1]
			if _, exists := uniqueImages[imageUrl]; !exists {
				uniqueImages[imageUrl] = struct{}{}
				imageUrls = append(imageUrls, imageUrl)
			}
		}
	}

	return imageUrls, nil
}
