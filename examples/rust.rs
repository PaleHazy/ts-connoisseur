// This is a comment in Rust

fn main() { // This is a function declaration
  println!("Hello, Rust!"); // This is a function call with a string argument
}

// This is a struct definition
struct Person {
  name: String,
  age: u32,
}

impl Person { // This is an implementation block for the Person struct
  fn new(name: String, age: u32) -> Person { // This is a struct constructor
      Person { name, age } // This is a struct initialization with shorthand field syntax
  }

  fn say_hello(&self) { // This is a method declaration with a reference receiver
      println!("Hello, my name is {} and I'm {} years old!", self.name, self.age); // This is a formatted string output with struct field values
  }

  fn have_birthday(&mut self) { // This is another method declaration with a mutable reference receiver
      self.age += 1; // This is a struct field modification
  }
}

fn main() { // This is another function declaration with the same name as the previous one (main)
  let mut person = Person::new(String::from("John Doe"), 30); // This is a struct instantiation with a variable assignment
  person.say_hello(); // This is a method call
  person.have_birthday(); // This is another method call
  person.say_hello(); // This is another method call with updated struct field values
}
