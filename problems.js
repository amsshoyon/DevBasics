// ---------------------------------------------
// Print fizz buzz on condition
// ---------------------------------------------
const fizzBuzz = maxNumber => {
    for (let i = 0; i <= maxNumber; i++) {
        if (i !== 0 && i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log('Fizz');
        } else if (i % 3 !== 0 && i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

const commonDiviser = (num1, num2) => {};

fizzBuzz(100);

// ---------------------------------------------
// Common Divisors of Two Numbers
// ---------------------------------------------
function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}

function commDiv(a, b) {
    let n = gcd(a, b);
    let result = '';
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            result = result + ', ' + i;
        }
    }
    return result;
}

let a = 40, b = 100;
console.log(commDiv(a, b));

// ---------------------------------------------
// kid who get the last toy 
// ---------------------------------------------
const lastKidGetTheToy = (kids, toys) => {
    if (kids === 1) return 1;
    else if(toys % kids === 0) return kids;
    else return toys % kids;
}

console.log(lastKidGetTheToy(1, 25))

// ---------------------------------------------
// Array Destructuring
// ---------------------------------------------
function removeFirstTwo(list) {
    const [, , ...arr] = list; 
    return arr;
  } 
  var arrLiteral = [8,9,10,11,12]
  console.log("arr contains: " + removeFirstTwo(arrLiteral))


// ---------------------------------------------
// Check Type
// ---------------------------------------------
function check(obj) {
    if (Object.prototype.toString.call(obj) === "[object Array]") {
      return true;
    } else {
      return false;
    }
  }
  console.log(check(123)); // [object Number]
  console.log(check("cat")); // [object String]
  console.log(check([1, 2, 3, 4])); // [object Array]
  console.log(check({"a": 2, "b": 3})); // [object Object]

  // Base 

  new (function Custom(){}) // [object Object]
  function Custom(){} // [object Function]


  // ================================
  // Interesting Fact about closure
  // ================================
  function x() {
      for(var i = 1; i <= 5; i++) {
          setTimeout(function() {
              console.log(i);
          }, i * 1000);
      }
  }

  x();

  // will console 6, 5 times, 1s interval. Why ???

//   But changing var to let, it works

function x() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}

x();

// using var is also possible by passing variable i 
function x() {
    for(var i = 1; i <= 5; i++) {
        function close(i){ // new copy of i where its referrance in different
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}

x();
