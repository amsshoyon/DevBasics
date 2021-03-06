## Js Topics ()
Execution contest: Memory Allocation/Variable Environment > Code execution/Thread of Execution
| Topics |
| ----------------------- |
|* [How Browser Works](#how-browser-works) |
|* [Scopes](#scopes) |
|* [Closures](#closures)|
|* [Recursion](#recursion)|
|* [Hoisting](#hoisting)|
|* [var vs const vs let](#var-vs-const-vs-let)|
|* [Primitive & Reference Value](#primitive-reference-value)|
|* [Callback vs Promise vs Rx Observable vs Async Await](#calback-vs-promise-vs-rx-observable-vs-async-await)|
|* [IIFE](#iife)|
|* [Event Delegation](#event-delegation)| 
|* [Target vs Current target ](#target-vs-current-target)|
|* [Call by Reference ](#call-by-reference)|
|* [Functions ](#functions)|

### How Browser Works

https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17

### Scopes

Scope is all about the visibility of variables in your code - it controls which variable can be used where.

JavaScript knows three types of scope:

Global Scope: Variables defined outside of any function or other block statement like if

Function Scope: Variables defined with var inside of a function
Block Scope: Variables defined with let or const in any block (like if, for etc.)

| laxical environment | scope chain |

https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8

| Temporal Dead Zone |

https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=9
 
 [⬆ Back to Top](#js-topics)

---
### Closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.
Everithing in outside scope has access into inside/child scope.

* module structure
* data hiding and incapsulation

https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13

https://www.youtube.com/watch?v=t1nFAMws5FI&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=14

[⬆ Back to Top](#js-topics)

---

### Recursion
It’s just a function calling itself after all.
```
    // Beware: This causes an infinite loop!
    function callOnMe() {
    callOnMe();
    }

    callOnMe();

    // Use case
    function factorial(n) {
    if (n === 0) return 1; // base case
        return n * factorial(n - 1); // recursive step
    }

    factorial(3); // 6
```

[⬆ Back to Top](#js-topics)

---

### Hoisting 
https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5

Hoisting is JavaScript's default behavior of moving declarations to the top.

js works on 2 phase, 1. Compile phase  , then 2. Execution

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
```
    console.log (greeter);
    var greeter = "say hello"
```
it is interpreted as this:
```
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
```
So var variables are hoisted to the top of their scope and initialized with a value of undefined.

[⬆ Back to Top](#js-topics)

---

### var vs const vs let
#### var: var is function scoped.
When it is declared within a function. This means that it is available and can be accessed only within that function.

#### Let: let is block scoped. 
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:
```
    let greeting = "say Hi";
    let times = 4;

    if (times > 3) {
            let hello = "say Hello instead";
            console.log(hello);// "say Hello instead"
        }
    console.log(hello) // hello is not defined
```
Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope.

```
    // this will return an error:
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
```
    // However, if the same variable is defined in different scopes, there will be no error:
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
```

#### Const: const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.
const cannot be updated or re-declared

```
    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

    // or 

    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 
```

[⬆ Back to Top](#js-topics)

---

### Primitive & Reference Value
#### Primitive values : Primitive values are immutable and shared by copy.
```
    * String
    * Number
    * Boolean
    * undefined (and null)
    * Symbol
    * BigInt
```

#### Reference values: ARE mutable and are shared by reference.
```
    * Objects
    * Array
```

[⬆ Back to Top](#js-topics)

---

### Callback vs Promise vs Rx Observable vs Async Await

**Callback**: A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

code inside "jsBasics.js"

[⬆ Back to Top](#js-topics)

---

### IIFE
An Immediately-invoked Function Expression is a function defined as an expression and executed immediately after creation.
IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations

This is the syntax that defines an IIFE:

```
    ((foo) => {
        console.log(foo) // logs ams
    })("ams")

    // ---

    (function(value){
        var greet = 'Hello';
        console.log(greet+ ' ' + value); // logs Hello iffe
    })('iffe');   
```

[⬆ Back to Top](#js-topics)

---

### Event Delegation

[⬆ Back to Top](#js-topics)

---

### Target vs Current target

[⬆ Back to Top](#js-topics)

---

### Call by Reference
#### For arrays
```
const a = [1,2,3,4];
// const b = a.slice(); // general methode
const b = [...a]; // spread operator (ES6)
consloe.log(b); // logs 1,2,3,4
console.log(a === b); // logs false 
```
(a === b) returns false as b copies the values from a, looks like a, but they have seperate reference and are not same

#### For Objects
```
const person = {
    firstName: 'John',
    lastName: 'Doe'
};
let person2 = {...person}; // spread operator
let person3 = Object.assign({}, person); // using  Object.assign() method
let person4 = JSON.parse(JSON.stringify(person)); // using JSON

```
Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

---

#### Functions
```
// Function Statement
function a() {
    console.log("Function Statement");
}

// Function Expression
var b = function () {
    console.log("Function Expression");
}

// Difference betwn Function Statement & Function Expression
Hoisting, calling function statement, a(), before initialize it won't give error,
but calling function Expression, b(), before initializing will give an type error.

// Function Declaration
Same as Function Statement

// Anonymous Function
Function without any name or identity.
they are used as value.

function () {
    console.log("hellow")
}

doing so will return error. it is used to form a Function Expression. like,
var b = function () {
    console.log("Function Expression");
}

// Named function expression
A Function Expression, with a name.
var c = function  b() {
    console.log("Nemed Function");
}
can't call b() in global scope.

// function parameter vs function arguments
var b = function (param1, param2) { // params are local variable in function scope
    console.log("parmas");
}

b(argument1, argument2);

SO, things wi pass with a function is argument and things we call for a function is parameters.

// First class function or first class citizens
the abiluty to use functions as values, as argument, return a function from another function,..... this abilities are known as First class function

// Arroe function

---