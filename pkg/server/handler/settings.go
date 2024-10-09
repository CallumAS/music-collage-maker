package handler

import (
	"log"
	"strconv"
	"strings"

	"github.com/gorilla/websocket"
)

func HandleSettings(conn *websocket.Conn, query string) {
	parts := strings.Split(query, "|")
	if len(parts) != 5 {
		log.Println("Invalid query format")
		return
	}

	rows, err := strconv.Atoi(parts[0])
	if err != nil {
		log.Println("Error parsing rows:", err)
		return
	}
	cols, err := strconv.Atoi(parts[1])
	if err != nil {
		log.Println("Error parsing cols:", err)
		return
	}
	width, err := strconv.Atoi(parts[2])
	if err != nil {
		log.Println("Error parsing width:", err)
		return
	}
	height, err := strconv.Atoi(parts[3])
	if err != nil {
		log.Println("Error parsing height:", err)
		return
	}
	/*_, err := strconv.Atoi(parts[4])
	if err != nil {
		log.Println("Error parsing dpi:", err)
		return
	}
	*/
	var gridItemHeightAndWidth [2]int
	if rows > 0 && cols > 0 {
		gridItemHeightAndWidth = [2]int{
			width / cols,
			height / rows,
		}
	} else {
		gridItemHeightAndWidth = [2]int{0, 0}
	}

	response := map[string]interface{}{
		"action": "settings",
		"width":  gridItemHeightAndWidth[0],
		"height": gridItemHeightAndWidth[1],
	}

	sendJSONResponse(conn, response)
}
