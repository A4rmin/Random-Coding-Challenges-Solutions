console.log("Hello, TypeScript!");

// TypeScript being a "Syntactic Superset" means that it shares the same base syntax
// as JavaScript, but adds something to it. (static typings)

// TypeScript uses compile time type checking. Which means it checks if the specified
//  types match before running the code, not while running the code.

//  npm install typescript --save-dev
//  npx tsc --init // for better configuration
//  npx tsc firstProgram.ts

// The compiler can be configured using a tsconfig.json file.

// Here is an example of more things you could add to the tsconfig.json file:
// {
//   "include": ["src"],
//   "compilerOptions": {
// "outDir": "./build"
//   }
// }
//
// You can open the file in an editor to add those options.
//  This will configure the TypeScript compiler to transpile TypeScript files located in the src/ directory of your project, into JavaScript files in the build/ directory.

// There are three main primitives in JavaScript and TypeScript.

//     boolean - true or false values
//     number - whole numbers and floating point values
//     string - text values like "TypeScript Rocks"

// There are also 2 less common primitives used in later versions of Javascript and TypeScript.

//     bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
//     symbol are used to create a globally unique identifier.

// Type Assignment

// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit - writing out the type
let myName: string = "A4rmin";
let myAge: number = 28;

// Implicit - TypeScript will "guess" the type, based on the assigned value:
let myName2 = "A4rmin"; // TypeScript will infer that myName2 is a string
let myAge2 = 28; // TypeScript will infer that myAge2 is a number
// TypeScript will also infer the type of a variable based on the value assigned to it.
console.log(myName, typeof myName); // string
console.log(myAge, typeof myAge); // number
console.log(myName2, typeof myName2); // string
console.log(myAge2, typeof myAge2); // number
// let armin: string = "A4rmin";
// armin = 28; // This will throw an error, because armin is a string and 28 is a number
// TypeScript will throw an error if you try to assign a value of a different type to a variable.
// let armin2 = "A4rmin";
// armin2 = 28; // this will also throw an error, because armin2 is a string and 28 is a number

// JavaScript will not throw an error for mismatched types.

//TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
// This is not recommended, as it defeats the purpose of using TypeScript.
let myVariable: any = "A4rmin";
console.log(myVariable, typeof myVariable); // string
myVariable = 28; // This will not throw an error, because myVariable is of type any.
console.log(myVariable, typeof myVariable); // number

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
// In this specific case, parsing "55" results in the number 55, not a string or an object. The console.log(typeof json) will output "number".
// To make this code more type-safe, you could use TypeScript's type assertion or the generic parameter of JSON.parse:

const json2 = JSON.parse("55") as number; // Type assertion
// const json3 = JSON.parse<number>("55"); // Generic parameter // will throw an error since JSON.parse doesn't accept a generic parameter
console.log(typeof json2); // number
console.log(typeof json3); // number
// Type assertion is a way to tell TypeScript what type you expect a value to be.
// It doesn't change the runtime behavior of the code, but it helps TypeScript understand your intentions.

// TypeScript has special types that may not refer to any specific type of data.
// any is a type that disables type checking and effectively allows all types to be used.
let u: any = true; // any type
console.log(u, typeof u); // number
Math.random(u); // any type

u = "A4rmin"; // any type
console.log(u, typeof u); // string

let u2 = true;
console.log(u2, typeof u2); // boolean
// u2 = "A4rmin"; // This will throw an error, because u2 is a boolean and "A4rmin" is a string

//  Type: unknown

// unknown is a similar, but safer alternative to any.

// TypeScript will prevent unknown types from being used, as shown in the below example:

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// The `unknown` type is a safer alternative to `any` in TypeScript.
// Unlike `any`, variables of type `unknown` can be reassigned any value,
// but TypeScript won't allow direct property access or method calls.
//
// To access properties/methods on an `unknown` value, you must first:
// 1. Use type guards (typeof, instanceof) to narrow the type
// 2. Use type assertions to explicitly tell TypeScript what type you're expecting
//
// This approach provides better type safety than `any` while still allowing
// flexibility when working with values whose type cannot be determined ahead of time.

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
//
// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// Type: never
// never effectively throws an error whenever it is defined
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.

//  The readonly keyword can prevent arrays from being changed.

const names: string[] = ["A4rmin", "Armin", "Arminius"];
// names.push("Arminius"); // This will work, because names is a mutable array.
const names2: readonly string[] = ["A4rmin", "Armin", "Arminius"];
// names2.push("Arminius"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Typed Arrays

// A tuple is a typed array with a pre-defined length and types for each index.
//
// Tuples are great because they allow each element in the array to be a known type of value.
//
// To define a tuple, specify the type of each element in the array:

let myTuple: [number, boolean, string];
myTuple = [1, true, "A4rmin"]; // This is a valid tuple
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// it is best practice yo make tuples immune to change by readonly.
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];

// OBJECTS
// Methods are actions that can be performed on objects.

// Methods are function definitions stored as property values.
// this refers to the person object:

// this.firstName means the firstName property of person.

// this.lastName means the lastName property of person.
// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.

// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// In JavaScript, almost "everything" is an object.

//     Objects are objects
//     Maths are objects
//     Functions are objects
//     Dates are objects
//     Arrays are objects
//     Maps are objects
//     Sets are objects

// All JavaScript values, except primitives, are objects.
// throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day off");

// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:

//     string
//     number
//     boolean
//     null
//     undefined
//     symbol
//     bigint

// TypeScript has a specific syntax for typing objects.

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car.type, car.model, car.year); // Toyota Corolla 2009

const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

//  Optional Properties

// Optional properties are properties that don't have to be defined in the object definition.
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;
// Optional properties are defined with a question mark ? after the property name.

// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// What Are Enums?
// Enums (short for enumerations) are a special TypeScript construct that allows you to define a set of named constants. Think of them as a way to create a collection of related values that you can reference by descriptive names rather than raw numbers or strings.
// Without enums (sad JavaScript way)
const USER_ROLE_ADMIN = 0;
const USER_ROLE_EDITOR = 1;
const USER_ROLE_VIEWER = 2;

// With enums (awesome TypeScript way)
enum UserRole {
  Admin,
  Editor,
  Viewer,
}

// Usage
function hasEditAccess(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}
// By default, enums are numeric, starting at 0:

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
console.log(Direction[0]); // "Up" (reverse mapping!)

// Enums can also be initialized with custom values:
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

console.log(HttpStatus.NotFound); // 404

// String enums are more explicit and don't provide reverse mapping:

enum HttpStatusString {
  OK = "OK",
  BadRequest = "Bad Request",
  Unauthorized = "Unauthorized",
  NotFound = "Not Found",
}

console.log(HttpStatusString.NotFound); // "Not Found"
// String enums are useful when you want to ensure that the values are human-readable and meaningful.
//For performance optimization, you can use const enum:

const enum HttpStatusConst {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
// const enums are inlined at compile time, which means they are replaced with their values during compilation.
// This can lead to smaller output files and better performance, especially in large applications.
//You can mix string and numeric values (though not recommended):
enum Mixed {
  Name = "TypeScript",
  Version = 4,
  //   IsCool = true, // Technically works but avoid this
}

//Enums can contain computed values:

enum Computed {
  A = Math.pow(2, 0), // 1
  B = Math.pow(2, 1), // 2
  C = Math.pow(2, 2), // 4
}
// Best Practices
//-Use PascalCase for enum names (e.g., UserRole)
//-Use const enums for better performance when possible
//-Prefer string enums for better debugging and type safety
//-Document your enums, especially if the values have specific meaning
// Where to Use Enums
//-For a fixed set of related constants (days of week, HTTP status codes)
//-When you need to restrict a variable to a specific set of values
//-When the values have semantic meaning in your domain

// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

type person = {
  name: string;
  age: number;
  isAlive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  //   [key: string]: string | number | boolean | object; // index signature
};

const person1: person = {
  name: "A4rmin",
  age: 28,
  isAlive: true,
  hobbies: ["coding", "gaming"],
  address: {
    street: "123 Main St",
    city: "Tabriz",
    country: "Iran",
  },
};

// Type Aliases can also be used for function types:
type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
const result = add(5, 10);
console.log(result); // 15

// Type Aliases can also be used for union types:
type StringOrNumber = string | number;
const value: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;
const value3: StringOrNumber = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
// Type Aliases can also be used for intersection types:
type Person = {
  name: string;
  age: number;
};
type Employee = {
  employeeId: number;
  department: string;
};
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
  name: "A4rmin",
  age: 28,
  employeeId: 123,
  department: "Engineering",
};
// Type Aliases can also be used for mapped types, conditional types, and other advanced type manipulations.

// interfaces
// Interfaces are a way to define the structure of an object.
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height: number;
  width: number;
  area: () => number;
}
const rectangle: Rectangle = {
  height: 10,
  width: 5,
  area: function () {
    return this.height * this.width;
  },
};

console.log(rectangle.area()); // 50

// Interfaces can extend each other's definition.
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface coloredRectangle extends Rectangle {
  color: string;
}
const coloredRectangle: coloredRectangle = {
  height: 10,
  width: 5,
  area: function () {
    return this.height * this.width;
  },
  color: "red",
};

console.log(coloredRectangle.area(), coloredRectangle.color); // 50

// TypeScript Union Types

// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// Union "|"  (OR)
// Using the "|" we are saying our parameter is a string or number:

function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}
printId(123); // Your ID is: 123
printId("123"); // Your ID is: 123
// printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:

function printStatusCode(code: string | number) {
  console.log(`Your status code is: ${code.toUpperCase()}`);
  // Error: Property 'toUpperCase' does not exist on type 'string | number'.
  // This is because TypeScript doesn't know if code is a string or number.
  // To fix this, we can use a type guard to check the type of code before calling toUpperCase:
  if (typeof code === "string") {
    console.log(`Your status code is: ${code.toUpperCase()}`);
  } else {
    console.log(`Your status code is: ${code}`);
  }
  // This way, TypeScript knows that code is a string when we call toUpperCase.
  // This is called a type guard.
  // Type guards are a way to narrow down the type of a variable based on some condition.
}

// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
function multiply(a, b) {
  // poor js way
  return a * b;
}
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function multiplyTyped(a: number, b: number): number {
  return a * b;
}
// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// Return Type
// The type of the value returned by the function can be explicitly defined.
function getTime(): string {
  return new Date().toLocaleTimeString();
}
console.log(getTime()); // 10:30:00 AM

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
function getTime2() {
  return new Date().toLocaleTimeString();
}

console.log(typeof getTime2(), typeof getTime());

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function helloWorld(): void {
  console.log("Hello, World!");
}

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}`;
}
// The age parameter is optional, so it can be omitted when calling the function.
// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function greetWithDefault(name: string, age: number = 18): string {
  return `Hello ${name}, you are ${age} years old.`;
} // TypeScript can also infer the type from the default value.

// Named Parameters

// Named parameters are a way to pass arguments to a function by their names rather than their positions.

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// Rest parameters allow you to pass a variable number of arguments to a function.

// Why Use Rest Parameters?
// Flexibility: You don't need to know in advance how many arguments you'll receive
// Array Operations: Since rest parameters create an array, you get all array methods for free
// Clean Code: No more messy arguments object like in old JavaScript
function adds(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

function sumAllTheThings(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAllTheThings(1, 2, 3)); // 6
console.log(sumAllTheThings(10, 20, 30, 40)); // 100

function createGameCharacter(name: string, level: number, ...skills: string[]) {
  return {
    name,
    level,
    skills,
    skillCount: skills.length,
  };
}
// mixed parameters
const hero = createGameCharacter(
  "MegaWarrior",
  99,
  "Fireball",
  "Ice Shield",
  "Thunder"
);
console.log(hero);

//Important Rules to Remember!
// Rest parameter must be the last parameter in a function
// You can only have one rest parameter per function
// Rest parameters create arrays, so you can use all array methods

// Type Alias
// Function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

// TypeScript Casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
const someValue: unknown = "Hello, TypeScript!";
const strLength: number = (someValue as string).length;
console.log(strLength); // 17

// Casting with angle brackets
// Another way to cast a variable is using angle brackets, which is similar to the as keyword but uses a different syntax.
const someValue2: unknown = "Hello, TypeScript!";
const strLength2: number = (<string>someValue2).length;
console.log(strLength2); // 17
// This syntax is less common in modern TypeScript code, as it can conflict with JSX | TSX syntax in React.

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let z: unknown = 4;
console.log((z as string).length); // prints undefined since numbers don't have a length

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:

console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
//  The Force casting section below covers how to override this.

// Force casting
// Force casting is a way to override TypeScript's type checking and force a variable to be a specific type.
// This is not recommended, as it can lead to runtime errors if the data is not actually of the specified type.
// Force casting is done by first casting the variable to unknown, and then to the desired type.
let c = "hello";
console.log((c as unknown as number).length); // c is not actually a number so this will return undefined

// TypeScript will not throw an error, but this is not recommended as it can lead to runtime errors.

// For review of JS classes go to class.js file.
// TypeScript Classes
// TypeScript adds types and visibility modifiers to JavaScript classes.

// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

class student {
  name: string;
  age: number;
  stuId: number;
  constructor(name: string, age: number, stuId: number) {
    this.name = name;
    this.age = age;
    this.stuId = stuId;
  }
}

/*
Members: Visibility

TypeScript provides access modifiers to control how class members can be accessed:

  public - (default) accessible from anywhere
  private - only accessible within the class itself
  protected - accessible within the class and its subclasses
  
Best practices:
  - Use parameter properties to simplify constructor initialization
  - Use PascalCase for class names
  - Mark properties as readonly when they shouldn't change after initialization
  - Add appropriate visibility modifiers to all members
*/

class Student {
  // Using parameter properties - combines declaration and initialization
  constructor(
    public readonly name: string,
    public age: number,
    private readonly studentId: number
  ) {
    // No need to manually assign properties when using parameter properties
  }

  // Method to demonstrate private member usage
  public getStudentInfo(): string {
    return `${this.name} (ID: ${this.studentId})`;
  }
}

const student1 = new Student("A4rmin", 28, 12345);

// Inheritance: Implements

// Interfaces can be used to define the type a class must follow through the implements keyword.

interface shape {
  getArea(): number;
}
class Circle implements shape {
  public constructor(protected readonly radius: number) {}
  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored

// Inheritance: Extends
// Classes can extend other classes using the extends keyword.

interface shape {
  getArea: () => number;
}

class Rectangle implements shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height;
  }
}
class square extends Rectangle {
  public constructor(width: number) {
    super(width, width); // Call the parent constructor with the same value for width and height
  }
  // getArea gets inherited from Rectangle
}
/*
Override

When a class extends another class, it can replace the members of the parent class with the same name.

Newer versions of TypeScript allow explicitly marking this with the override keyword.

*/

class Rectangle {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}
  public getArea(): number {
    return this.width * this.height;
  }
  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width); // Call the parent constructor with the same value for width and height
  }
  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}
// By default the override keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist. Use the setting noImplicitOverride to force it to be used when overriding.

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class Polygon {
  public abstract getArea(): number; // Abstract method
  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }
  public getArea(): number {
    return this.width * this.height;
  }
}
//  Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

// Abstract classes are useful for defining a common interface for a group of related classes, while still allowing each class to implement its own specific behavior.

// TypeScript Basic Generics

/* Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

Generics makes it easier to write reusable code. */

// Functions

// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

function creaetePair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(creaetePair(1, "A4rmin")); // [1, "A4rmin"]

// TypeScript can also infer the type of the generic parameter from the function parameters.

/* Classes

Generics can be used to create generalized classes, like Map.*/

class NamedValue
