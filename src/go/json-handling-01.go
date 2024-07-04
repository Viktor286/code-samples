package main

import (
	"encoding/json"
	"fmt"
	"log"
)

// User struct represents a user
type User struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

func main() {
	user := User{Name: "Alice", Email: "alice@example.com", Age: 30}

	// Marshal the user struct to JSON
	userJSON, err := json.Marshal(user)
	if err != nil {
		log.Fatalf("Error marshalling to JSON: %v", err)
	}
	fmt.Println("User JSON:", string(userJSON))

	// Unmarshal the JSON back to a user struct
	var user2 User
	err = json.Unmarshal(userJSON, &user2)
	if err != nil {
		log.Fatalf("Error unmarshalling from JSON: %v", err)
	}
	fmt.Printf("User struct: %+v\n", user2)
}
