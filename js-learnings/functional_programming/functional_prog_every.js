// Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(num){
    return num>0;
  });
  
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));