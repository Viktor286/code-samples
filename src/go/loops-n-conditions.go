package main

import "fmt"

func main() {
	// For loop
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// While loop (Go style)
	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	// If-else condition
	x := 10
	if x%2 == 0 {
		fmt.Println(x, "is even")
	} else {
		fmt.Println(x, "is odd")
	}

	// Switch statement
	day := "Monday"
	switch day {
	case "Monday":
		fmt.Println("Start of the work week")
	case "Friday":
		fmt.Println("Almost weekend")
	default:
		fmt.Println("Midweek")
	}
}
