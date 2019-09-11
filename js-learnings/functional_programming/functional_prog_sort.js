// Functional Programming: Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b){
    return a.localeCompare(b) ;
  });
  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));