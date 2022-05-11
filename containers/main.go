//go:build linux
// +build linux

package main

import (
	"fmt"
	"os"
	"os/exec"
)

// main is the entry point for the application.
// docker run <container> cmd args
// go run main.go cmd args
func main() {
	switch os.Args[1] {
	case "run":
		run()
	default:
		panic("what should I do with " + os.Args[1] + "?")
	}
}

func run() {
	fmt.Printf("Running %v\n", os.Args[2:])
	cmd := exec.Command(os.Args[2], os.Args[3:]...)
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	//cmd.SysProcAttr = &syscall.SysProcAttr{
	//	Cloneflags: syscall.CLONE_NEWUTS, // | syscall.CLONE_NEWPID | syscall.CLONE_NEWNS,
	//}

	must(cmd.Run())
}

func must(err error) {
	if err != nil {
		panic(err)
	}
}
