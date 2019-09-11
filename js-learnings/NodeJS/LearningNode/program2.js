//Takes input from console and adds them and prints the sum to console

// The first element of the process.argv array
//   is always 'node', and the second element is always the path to your
//   program.js file, so you need to start at the 3rd element (index 2), adding
//   each item to the total until you reach the end of the array.

// Also be aware that all elements of process.argv are strings and you may
//   need to coerce them into numbers. You can do this by prefixing the
//   property with + or passing it to Number(). e.g. +process.argv[2] or
//   Number(process.argv[2])

var sum = 0;
for(let j=2;j<process.argv.length; j++){
    sum += Number(process.argv[j]);
}
console.log(Number(sum));