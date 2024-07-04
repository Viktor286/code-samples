package main

import (
	"fmt"
)

func main() {
	// Create a map with string keys and integer values
	ageMap := map[string]int{
		"Alice": 30,
		"Bob":   25,
		"Carol": 35,
	}

	// Iterate over the map using a range loop
	fmt.Println("Iterating over ageMap:")
	for key, value := range ageMap {
		fmt.Printf("%s is %d years old.\n", key, value)
	}

	// Create a map with integer keys and string values
	fruitMap := map[int]string{
		1: "apple",
		2: "banana",
		3: "cherry",
	}

	// Iterate over the map using a range loop
	fmt.Println("\nIterating over fruitMap:")
	for key, value := range fruitMap {
		fmt.Printf("Key %d: %s\n", key, value)
	}
}
