// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.

var fs = require('fs')
var path = process.argv[2];
var buffer = fs.readFileSync(path);
var text = buffer.toString();
// console.log(text);
var lines = text.split('\n');
// console.log(lines);
var newlines_length = lines.length -1;
console.log(newlines_length);


