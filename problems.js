// Print fizz buzz on condition
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

// Common Divisors of Two Numbers
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

let a = 40,
    b = 100;
console.log(commDiv(a, b));