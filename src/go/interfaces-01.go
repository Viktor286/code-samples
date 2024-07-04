package main

import "fmt"

// Animal interface defines a behavior for animals
type Animal interface {
	Speak() string
}

// Dog struct represents a dog
type Dog struct{}

// Dog implements the Animal interface
func (d Dog) Speak() string {
	return "Woof!"
}

// Cat struct represents a cat
type Cat struct{}

// Cat implements the Animal interface
func (c Cat) Speak() string {
	return "Meow!"
}

func main() {
	var animal Animal

	animal = Dog{}
	fmt.Println("Dog says:", animal.Speak())

	animal = Cat{}
	fmt.Println("Cat says:", animal.Speak())
}
