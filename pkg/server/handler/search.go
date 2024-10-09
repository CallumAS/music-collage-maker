package handler

import (
	"changeme/pkg/scraper"
	"github.com/gorilla/websocket"
)

func HandleSearch(conn *websocket.Conn, query string) {

	data, _ := scraper.Scrape(query)
	response := map[string]any{"action": "search", "response": data}
	sendJSONResponse(conn, response)

}
