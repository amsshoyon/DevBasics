## Js Topics
```python
** Scopes
** Closures
** Recursion
** Hoisting
** var vs const vs let
** Primitive & Reference Value
** Callback vs Promise vs Rx.Observable
** IIFE
** Event Delegation
** Target vs Current target

```

### Scopes
Scope is all about the visibility of variables in your code - it controls which variable can be used where.

JavaScript knows three types of scope:

Global Scope: Variables defined outside of any function or other block statement like if
Function Scope: Variables defined with var inside of a function
Block Scope: Variables defined with let or const in any block (like if, for etc.)

### Closures
Everithing in outside scope has access into inside/child scope.

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

### Hoisting
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
