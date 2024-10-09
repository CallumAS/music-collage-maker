package handler

import "github.com/gorilla/websocket"

func HandleNotFound(conn *websocket.Conn) {
	response := map[string]any{"response": "Search"}
	sendJSONResponse(conn, response)
}
