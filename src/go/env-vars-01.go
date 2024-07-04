package main

import (
	"fmt"
	"os"
)

func main() {
	// Set an environment variable for testing
	os.Setenv("MY_ENV_VAR", "12345")

	// Get the environment variable
	value, exists := os.LookupEnv("MY_ENV_VAR")
	if !exists {
		fmt.Println("Environment variable not set")
	} else {
		fmt.Println("Environment variable value:", value)
	}

	// Unset the environment variable
	os.Unsetenv("MY_ENV_VAR")

	// Try to get the environment variable again
	value, exists = os.LookupEnv("MY_ENV_VAR")
	if !exists {
		fmt.Println("Environment variable not set")
	} else {
		fmt.Println("Environment variable value:", value)
	}
}
