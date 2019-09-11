// Functional Programming: Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    let sortedArray = [];
    sortedArray = sortedArray.concat(arr);
  // Add your code below this line
  return sortedArray.sort(function(a,b){
    return a-b ;
  });
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);