// Intermediate Algorithm Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  function checkInFirst(first,second){
  for(let index = 0; index < first.length; index++){
      if(second.indexOf(first[index]) === -1){
          newArr.push(first[index]);
      }
  }
}
checkInFirst(arr1,arr2);
checkInFirst(arr2,arr1);
return newArr;
}

function diffArrayM2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

function diffArrayM3(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArrayM2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArrayM3([1, 2, 3, 5], [1, 2, 3, 4, 5]));