const prompt = require('prompt-sync')();

const n = Number(prompt("Enter the number of Fibonacci terms you want to display: "));

// Create a new array of size 'n'
var series = new Array(n); 
  
// Fills all places in array with 0
series.fill(0);  
  
// Seed value for 1st element
series[0] = 0; 
  
// Seed value for 2nd element
series[1] = 1;  
  
// Initialize the conditional variable
let i = 2;  

while(i < n) {

    // Apply basic Fibonacci formulae
    series[i] = series[i-1] + series[i-2];  
     
    // Increment the conditional variable
    i++;  
}
  
// Print the series
console.log(series); 