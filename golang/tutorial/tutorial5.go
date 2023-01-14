package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Printf("Enter a text: ")
	scanner.Scan()
	input := scanner.Text()
	fmt.Printf("You typed: %q\n", input)

	fmt.Printf("Enter your birth year: ")
	scanner.Scan()
	input1, _ := strconv.ParseInt(scanner.Text(), 10, 64)
	fmt.Printf("You typed: %d\n", 2022-input1)
}
