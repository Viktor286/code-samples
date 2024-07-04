package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

// Config struct represents the configuration data
type Config struct {
	Host string `json:"host"`
	Port int    `json:"port"`
}

func main() {
	// Writing JSON to a file
	config := Config{Host: "localhost", Port: 8080}
	data, err := json.Marshal(config)
	if err != nil {
		log.Fatalf("Error marshalling JSON: %v", err)
	}

	err = ioutil.WriteFile("config.json", data, 0644)
	if err != nil {
		log.Fatalf("Error writing JSON to file: %v", err)
	}

	// Reading JSON from a file
	file, err := os.Open("config.json")
	if err != nil {
		log.Fatalf("Error opening JSON file: %v", err)
	}
	defer file.Close()

	data, err = ioutil.ReadAll(file)
	if err != nil {
		log.Fatalf("Error reading JSON file: %v", err)
	}

	var config2 Config
	err = json.Unmarshal(data, &config2)
	if err != nil {
		log.Fatalf("Error unmarshalling JSON: %v", err)
	}

	fmt.Printf("Config read from file: %+v\n", config2)
}
