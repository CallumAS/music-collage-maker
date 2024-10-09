package handler

import (
	"bytes"
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/nfnt/resize"
	"golang.org/x/image/tiff"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"image/png"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"
)

func downloadImage(url string) (image.Image, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var buf bytes.Buffer
	if _, err := io.Copy(&buf, resp.Body); err != nil {
		return nil, err
	}

	bufReader := bytes.NewReader(buf.Bytes())
	img, _, err := image.Decode(bufReader)
	if err != nil {
		log.Printf("Error decoding image from %s: %v. Trying to assume PNG format.", url, err)
		bufReader.Seek(0, 0)
		img, err = png.Decode(bufReader)
		if err != nil {
			log.Printf("Error assuming PNG format for %s: %v. Trying JPEG format.", url, err)
			bufReader.Seek(0, 0)
			img, err = jpeg.Decode(bufReader)
			if err != nil {
				return nil, err
			}
		}
	}

	return img, nil
}

func HandleProcess(conn *websocket.Conn, settings string, imageGrid [][]string) {
	parts := strings.Split(settings, "|")
	if len(parts) != 5 {
		log.Println("Invalid query format:", settings)
		return
	}

	rows, err := strconv.Atoi(parts[0])
	if err != nil || rows <= 0 {
		log.Println("Invalid number of rows:", err)
		return
	}
	cols, err := strconv.Atoi(parts[1])
	if err != nil || cols <= 0 {
		log.Println("Invalid number of columns:", err)
		return
	}
	width, err := strconv.Atoi(parts[2])
	if err != nil || width <= 0 {
		log.Println("Invalid width:", err)
		return
	}
	height, err := strconv.Atoi(parts[3])
	if err != nil || height <= 0 {
		log.Println("Invalid height:", err)
		return
	}
	dpi, err := strconv.Atoi(parts[4])
	if err != nil || dpi <= 0 {
		log.Println("Invalid dpi:", err)
		return
	}

	gridItemWidth := width / cols
	gridItemHeight := height / rows

	log.Printf("Processing with grid size: %dx%d, item size: %dx%d, dpi: %d", rows, cols, gridItemWidth, gridItemHeight, dpi)

	// Create a new blank image
	finalImage := image.NewRGBA(image.Rect(0, 0, width, height))
	draw.Draw(finalImage, finalImage.Bounds(), &image.Uniform{color.White}, image.Point{}, draw.Src)

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if r < len(imageGrid) && c < len(imageGrid[r]) {
				url := imageGrid[r][c]
				img, err := downloadImage(url)
				if err != nil {
					log.Printf("Error downloading image from %s: %v", url, err)
					continue
				}

				// Resize
				resizedImg := resizeImage(img, gridItemWidth, gridItemHeight)

				// Calculate the position
				x := c * gridItemWidth
				y := r * gridItemHeight

				// Draw the image
				draw.Draw(finalImage, image.Rect(x, y, x+gridItemWidth, y+gridItemHeight), resizedImg, image.Point{}, draw.Over)
			}
		}
	}

	if err := sendImage(conn, finalImage); err != nil {
		log.Println("Error sending image:", err)
	}
}

func resizeImage(img image.Image, width, height int) image.Image {
	return resize.Resize(uint(width), uint(height), img, resize.Lanczos3)
}

func sendImage(conn *websocket.Conn, img image.Image) error {
	var buf bytes.Buffer
	if err := tiff.Encode(&buf, img, &tiff.Options{
		Compression: tiff.Uncompressed,
	}); err != nil {
		return fmt.Errorf("error encoding image to TIFF: %w", err)
	}

	// Send the binary image data over WebSocket
	err := conn.WriteMessage(websocket.BinaryMessage, buf.Bytes())
	if err != nil {
		return fmt.Errorf("error sending image over WebSocket: %w", err)
	}

	log.Println("Image sent successfully!")
	return nil
}
