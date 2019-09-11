// Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  //console.log(arr,args,arguments);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
       // console.log(arr[i],args[j]);
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
function destroyerM2(arr) {
  var args = Array.from(arguments).slice(1);
  console.log(args);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

const destroyerM3 = (arr, ...args) => arr.filter(i => !args.includes(i));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyerM2([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyerM3([1, 2, 3, 1, 2, 3], 2, 3));