const prompt = require('prompt-sync')();

const n = Number(prompt("Enter the number of Fibonacci terms you want to display: "));

let a = 0;
let b = 1;
let c = 1;

let count = 0;

if (count < n) {console.log(a); count = count + 1};

if (count < n) {console.log(b); count = count + 1};

while (count < n) {

    console.log(c);

   a = b; 
   b = c;
   c = a + b;
    

    count = count + 1;
}