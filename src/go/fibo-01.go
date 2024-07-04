package main

import (
	"fmt"
)

// Fibonacci function calculates the nth Fibonacci number using recursion and memoization
func Fibonacci(n int, memo map[int]int) int {
	if n <= 1 {
		return n
	}
	if val, ok := memo[n]; ok {
		return val
	}
	memo[n] = Fibonacci(n-1, memo) + Fibonacci(n-2, memo)
	return memo[n]
}

func main() {
	n := 10
	memo := make(map[int]int)
	fmt.Printf("Fibonacci of %d is %d\n", n, Fibonacci(n, memo))
}
