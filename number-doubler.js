const prompt = require('prompt-sync')();

let n = Number(prompt("Enter a number less than 100: "));

while (n <= 100) 
    {
      console.log(n);
       n = n*2;
    }

console.log(n)