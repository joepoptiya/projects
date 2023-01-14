package main

import "fmt"

func main() {

	var num uint16 = 260
	num = num + 5
	fmt.Println("Hello World", num)

	var n = 260.39
	fmt.Printf("%T\n", n)

	a := 6
	fmt.Printf("%T\n", a)

	var b uint64
	fmt.Printf("%T\n", b)
	fmt.Println(b)
}
