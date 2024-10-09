package scraper

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"regexp"
)

func Deezers(playlistId string) ([]string, error) {
	url := fmt.Sprintf("https://api.deezer.com/playlist/%s", playlistId)

	// Step 1: Download the playlist json
	resp, err := http.Get(url)
	if err != nil {
		log.Println("Failed to fetch the playlist page:", err)
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	println(string(body))
	if err != nil {
		log.Println("Failed to read the page content:", err)
		return nil, err
	}

	// Step 2: extract image ids
	regexPattern := `md5_image":"([a-zA-Z0-9]+)"`

	re := regexp.MustCompile(regexPattern)

	matches := re.FindAllStringSubmatch(string(body), -1)

	uniqueMd5Images := make(map[string]bool)
	var md5Images []string

	for _, match := range matches {
		if len(match) > 1 {
			md5Image := match[1]
			// Check if ID is already in the map
			if !uniqueMd5Images[md5Image] {
				// If not, add it to the map and the list
				uniqueMd5Images[md5Image] = true
				md5Images = append(md5Images, "https://e-cdns-images.dzcdn.net/images/cover/"+match[1]+"/1000x1000-000000-80-0-0.jpg")
			}
		}
	}

	return md5Images, nil
}

func DeezersSearch(query string) ([]string, error) {
	url := fmt.Sprintf("https://api.deezer.com/search?q=%s", url.QueryEscape(query))

	// Step 1: Download the playlist json
	resp, err := http.Get(url)
	if err != nil {
		log.Println("Failed to fetch the playlist page:", err)
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	println(string(body))
	if err != nil {
		log.Println("Failed to read the page content:", err)
		return nil, err
	}

	// Step 2: extract image ids
	regexPattern := `md5_image":"([a-zA-Z0-9]+)"`

	re := regexp.MustCompile(regexPattern)

	matches := re.FindAllStringSubmatch(string(body), -1)

	uniqueMd5Images := make(map[string]bool)
	var md5Images []string

	for _, match := range matches {
		if len(match) > 1 {
			md5Image := match[1]
			// Check if ID is already in the map
			if !uniqueMd5Images[md5Image] {
				// If not, add it to the map and the list
				uniqueMd5Images[md5Image] = true
				md5Images = append(md5Images, "https://e-cdns-images.dzcdn.net/images/cover/"+match[1]+"/1000x1000-000000-80-0-0.jpg")
			}
		}
	}

	return md5Images, nil
}
