const prompt = require('prompt-sync')();

var n = prompt("Enter a random string of letters: ");

let z = n;

while (z.length < 10){
     
     console.log(z)
     
     z = z.concat(n);
     
     }    

console.log(z);