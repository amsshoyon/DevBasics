## Js Topics
```python
1. Hoisting
2. var vs const vs let
3. Callback vs Promise vs Rx.Observable
4. IIFE
5. Event Delegation
5. Target vs Current target

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