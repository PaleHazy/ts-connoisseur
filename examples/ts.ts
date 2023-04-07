// This is a comment with the "comment" token scope

const name: string = "John"; // This is a variable declaration with the "variable" and "support.type.string" token scopes

function greet(): void { // This is a function declaration with the "entity.name.function" and "support.type" token scopes
  console.log(`Hello, ${name}!`); // This is a console log statement with the "support.function" and "string" token scopes
}

greet(); // This is a function call with the "entity.name.function" token scope

if (name === "John") { // This is an if statement with the "keyword.control" and "variable" token scopes
  console.log("You're awesome!"); // This is another console log statement with the "support.function" and "string" token scopes
} else {
  console.log("Try harder!"); // This is yet another console log statement with the "support.function" and "string" token scopes
}

const myArray: string[] = ["apple", "banana", "cherry"]; // This is an array declaration with the "variable" and "meta.brace.square" token scopes

myArray.forEach(function (item: string): void { // This is a function call with a callback function and the "variable" and "support.function" token scopes
  console.log(item); // This is a console log statement with the "support.function" and "string" token scopes
});

class Animal { // This is a class declaration with the "entity.name.type.class" and "keyword.declaration.class" token scopes
  name: string;
  type: string;

  constructor(name: string, type: string) { // This is a constructor function with the "entity.name.function" and "support.function" token scopes
    this.name = name; // This is an object property assignment with the "variable" and "keyword.operator" token scopes
    this.type = type; // This is another object property assignment with the "variable" and "keyword.operator" token scopes
  }

  speak(): void { // This is a class method with the "entity.name.function" and "support.function" token scopes
    console.log(`${this.name} says hi!`); // This is a console log statement with the "support.function" and "string" token scopes
  }
}

const myAnimal: Animal = new Animal("Fluffy", "cat"); // This is an object instantiation with the "variable" and "support.class" token scopes
myAnimal.speak(); // This is a method call with the "variable" and "support.function" token scopes
