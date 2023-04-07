// This is a comment in Go

package main // This is a package declaration

import "fmt" // This is an import statement

func main() { // This is a function declaration
	fmt.Println("Hello, Go!") // This is a function call with a string argument
}

// This is a struct definition
type Person struct {
	name string
	age int
}

func NewPerson(name string, age int) *Person { // This is a function declaration with a pointer return type
	return &Person{name, age} // This is a struct initialization with a pointer return value
}

func (p *Person) SayHello() { // This is a method declaration with a pointer receiver
	fmt.Printf("Hello, my name is %s and I'm %d years old!\n", p.name, p.age) // This is a formatted string output with struct field values
}

func (p *Person) HaveBirthday() { // This is another method declaration with a pointer receiver
	p.age++ // This is a struct field modification
}

func main() { // This is another function declaration with the same name as the previous one (main)
	person := NewPerson("John Doe", 30) // This is a struct instantiation with a variable assignment
	person.SayHello() // This is a method call
	person.HaveBirthday() // This is another method call
	person.SayHello() // This is another method call with updated struct field values
}
