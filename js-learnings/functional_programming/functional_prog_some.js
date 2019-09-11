// Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
  // Add your code below this line
  return arr.some(function(num){
      return num>0;
  });
  
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));