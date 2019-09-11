// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

var fs = require('fs')
var path = process.argv[2];

/* fs.readFile(path,"utf-8", function(err, text){
    var lines = text.split('\n');
    var newlines_length = lines.length -1;
    console.log(newlines_length);

}); */

fs.readFile(path, function (err, contents) {
    if (err) {
      return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  })


