package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Write to a file
	file, err := os.Create("example.txt")
	if err != nil {
		fmt.Printf("Error creating file: %v\n", err)
		return
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	_, err = writer.WriteString("Hello, World!\n")
	if err != nil {
		fmt.Printf("Error writing to file: %v\n", err)
		return
	}
	writer.Flush()

	// Read from a file
	file, err = os.Open("example.txt")
	if err != nil {
		fmt.Printf("Error opening file: %v\n", err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		fmt.Printf("Error reading file: %v\n", err)
	}
}
