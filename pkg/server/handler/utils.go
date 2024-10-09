package handler

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
)

func sendJSONResponse(conn *websocket.Conn, response map[string]any) {
	res, err := json.Marshal(response)
	if err != nil {
		log.Println("Error marshaling response:", err)
		return
	}
	if err := conn.WriteMessage(websocket.TextMessage, res); err != nil {
		log.Println("Error writing message:", err)
	}
}
