package main

import (
	"encoding/json"
	"fmt"
	"strconv"
	"time"
)

// User struct represents a user with JSON annotations for parsing
type User struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
}

func main() {
	// String to integer
	str := "123"
	intVal, err := strconv.Atoi(str)
	if err != nil {
		fmt.Println("Error converting string to int:", err)
		return
	}
	fmt.Println("Converted integer:", intVal)

	// String to float
	floatStr := "123.45"
	floatVal, err := strconv.ParseFloat(floatStr, 64)
	if err != nil {
		fmt.Println("Error converting string to float:", err)
		return
	}
	fmt.Println("Converted float:", floatVal)

	// Parsing JSON
	jsonData := `{"id": 1, "name": "Alice", "email": "alice@example.com", "created_at": "2023-07-04T12:34:56Z"}`
	var user User
	err = json.Unmarshal([]byte(jsonData), &user)
	if err != nil {
		fmt.Println("Error parsing JSON:", err)
		return
	}
	fmt.Printf("Parsed User: %+v\n", user)

	// Converting time
	timeStr := "2023-07-04T12:34:56Z"
	parsedTime, err := time.Parse(time.RFC3339, timeStr)
	if err != nil {
		fmt.Println("Error parsing time:", err)
		return
	}
	fmt.Println("Parsed time:", parsedTime)

	// Formatting time
	formattedTime := parsedTime.Format("2006-01-02 15:04:05")
	fmt.Println("Formatted time:", formattedTime)
}
