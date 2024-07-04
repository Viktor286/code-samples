package main

import (
	"fmt"
)

func main() {
	// Create a slice of integers
	intSlice := []int{1, 2, 3, 4, 5}

	// Iterate over the slice using a for loop
	fmt.Println("Iterating over intSlice:")
	for i := 0; i < len(intSlice); i++ {
		fmt.Printf("intSlice[%d] = %d\n", i, intSlice[i])
	}

	// Iterate over the slice using a range loop
	fmt.Println("\nIterating over intSlice using range:")
	for i, v := range intSlice {
		fmt.Printf("intSlice[%d] = %d\n", i, v)
	}

	// Create a slice of strings
	strSlice := []string{"apple", "banana", "cherry"}

	// Iterate over the slice using a range loop
	fmt.Println("\nIterating over strSlice:")
	for i, v := range strSlice {
		fmt.Printf("strSlice[%d] = %s\n", i, v)
	}
}
