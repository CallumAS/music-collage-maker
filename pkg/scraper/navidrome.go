package scraper

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
)

type AlbumListResponse struct {
	AlbumList AlbumList `xml:"albumList"`
}

type AlbumList struct {
	Albums []Album `xml:"album"`
}

type Album struct {
	ID       string `xml:"id,attr"`
	Name     string `xml:"name,attr"`
	CoverArt string `xml:"coverArt,attr"`
}

func getAlbumList(baseURL, username, password, apiVersion string) ([]Album, error) {
	url := fmt.Sprintf("%s/getAlbumList?u=%s&p=%s&v=%s&c=myApp&type=recent&size=500", baseURL, username, password, apiVersion)

	println(url)
	// Make HTTP request to get album list
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch album list: %w", err)
	}
	defer resp.Body.Close()

	// Parse the response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}

	var albumListResp AlbumListResponse
	if err := xml.Unmarshal(body, &albumListResp); err != nil {
		return nil, fmt.Errorf("failed to parse XML: %w", err)
	}

	return albumListResp.AlbumList.Albums, nil
}

func GetAlbumCoverURLs(baseURL, username, password, apiVersion string) ([]string, error) {
	albums, err := getAlbumList(baseURL, username, password, apiVersion)
	if err != nil {
		return nil, err
	}
	println(len(albums))
	var imageURLs []string
	for _, album := range albums {
		imageURL := getCoverArtURL(baseURL, username, password, apiVersion, album.CoverArt)
		imageURLs = append(imageURLs, imageURL)
	}

	return imageURLs, nil
}

func getCoverArtURL(baseURL, username, password, apiVersion, coverArtID string) string {
	format := "json"
	size := "500"

	return fmt.Sprintf("%s/getCoverArt?u=%s&p=%s&f=%s&v=%s&c=myApp&id=%s&size=%s",
		baseURL, username, password, format, apiVersion, coverArtID, size)
}
