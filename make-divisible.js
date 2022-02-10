const prompt = require('prompt-sync')();

let x = Number(prompt("Enter a number: "));
let y = Number(prompt("Enter a number: "));

while (x % y !== 0) 
    {
      console.log(x);
      x = x+1;
    }

console.log(x, "is divisible by", y);