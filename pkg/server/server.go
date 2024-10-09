package server

import (
	"changeme/pkg/server/handler"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type Message struct {
	Action    string     `json:"action"`
	Query     string     `json:"query"`
	ImageGrid [][]string `json:"grid"`
}

func Start() {
	http.HandleFunc("/ws", wsHandler)
	fmt.Println("WebSocket server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Failed to upgrade connection:", err)
		return
	}
	defer conn.Close()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			log.Println("Error reading message:", err)
			break
		}

		var message Message
		if err := json.Unmarshal(msg, &message); err != nil {
			log.Println("Invalid message format:", err)
			continue
		}

		switch message.Action {
		case "settings":
			handler.HandleSettings(conn, message.Query)
		case "search":
			handler.HandleSearch(conn, message.Query)

		case "process":
			handler.HandleProcess(conn, message.Query, message.ImageGrid)
		default:
			handler.HandleNotFound(conn)
		}
	}
}
