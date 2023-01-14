package main

import "fmt"

func main() {
	var fName string
	fmt.Print("Enter your first name: ")
	fmt.Scan(&fName)

	var lName string
	fmt.Print("Enter your last name: ")
	fmt.Scan(&lName)

	fmt.Println("Hello, ", fName, lName)
}
