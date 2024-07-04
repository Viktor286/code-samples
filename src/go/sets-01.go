package main

import (
	"fmt"
)

func main() {
	// Create a set of integers using a map with empty struct values
	intSet := map[int]struct{}{
		1: {},
		2: {},
		3: {},
	}

	// Iterate over the set using a range loop
	fmt.Println("Iterating over intSet:")
	for key := range intSet {
		fmt.Printf("Set contains: %d\n", key)
	}

	// Create a set of strings using a map with empty struct values
	strSet := map[string]struct{}{
		"apple":  {},
		"banana": {},
		"cherry": {},
	}

	// Iterate over the set using a range loop
	fmt.Println("\nIterating over strSet:")
	for key := range strSet {
		fmt.Printf("Set contains: %s\n", key)
	}
}
