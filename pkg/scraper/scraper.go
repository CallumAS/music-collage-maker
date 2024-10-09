package scraper

import (
	"errors"
	"strings"
)

func Scrape(query string) ([]string, error) {
	var data []string
	var err error

	if strings.HasPrefix(query, "https://www.deezer.com/en/playlist/") {
		parts := strings.Split(query, "?")
		playlistId := strings.TrimPrefix(parts[0], "https://www.deezer.com/en/playlist/")

		data, err = Deezers(playlistId)
		if err != nil {
			return nil, err
		}
		return data, nil
	}

	if strings.HasPrefix(query, "https://open.spotify.com/playlist/") {
		parts := strings.Split(query, "?")
		playlistId := strings.TrimPrefix(parts[0], "https://open.spotify.com/playlist/")

		data, err = Spotify(playlistId)
		if err != nil {
			return nil, err
		}
		return data, nil
	}

	if strings.HasPrefix(query, "subsonic|") {
		splits := strings.Split(query, "|")
		if len(splits) < 4 {
			return nil, errors.New("invalid Subsonic query format, expected subsonic|username|password|server")
		}
		username := splits[1]
		password := splits[2]
		server := splits[3]
		data, err = GetAlbumCoverURLs(username, password, server, "1.16.1")
		if err != nil {
			return nil, err
		}
		return data, nil
	}

	data, err = DeezersSearch(query)
	if err != nil {
		return nil, err
	}

	return data, nil
}
