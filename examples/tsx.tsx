// 1. Primitive types
let num: number = 42;
let str: string = "Hello, World!";
let bool: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// 2. Enum
enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
const dooot = Color[0];

function Component() {
  const doot = {}
  const [joot] = [1]
}
// 3. Array
let numArray: number[] = [1, 2, 3];
let strArray: Array<string> = ["one", "two", "three"];

// 4. Tuple
let tuple: [string, number] = ["hello", 10];

// 5. Any
let anything: any = 4;
anything = "four";

// 6. Unknown
let unknownValue: unknown = 42;
unknownValue = "fourty-two";

// 7. Void
function logMessage(msg: string): void {
  console.log(msg);
}

// 8. Interface
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
}

// 9. Type alias
type Lengthy = {
  length: number;
};

function getLength(obj: Lengthy): number {
  return obj.length;
}

// 10. Class
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 11. Generics
function identity<T>(arg: T): T {
  return arg;
}

let numOutput = identity<number>(42);
let strOutput = identity<string>("Hello, World!");

// 12. Decorators
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method called: ${propertyKey}`);
    return originalMethod.apply(this, args);
  };
}

class Example {
  @log
  public exampleMethod(): void {
    console.log("This method is being logged!");
  }
}

// 13. Type guards
function isNumber(val: any): val is number {
  if(typeof val === "number") {
    return true;
  }
  return typeof val === "number";
}

function processValue(value: string | number): void {
  if (isNumber(value)) {
    console.log("It's a number!");
  } else {
    console.log("It's a string!");
  }
}

// 14. Type assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// 15. Optional chaining
interface Person {
  name: string;
  address?: {
    street: string;
    city: string;
  };
}

const person: Person = { name: "Alice" };
console.log(person.address?.street);


// JSX

function App() {
  return <div>Hello, World!</div>;
} 
