//1. Basic Algorithm Scripting: Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr = [...arr2];
  arr.splice(n,0,...arr1.slice(0,arr1.length));
  return arr;
}
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//2. Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for(let i=0;i<arr.length;i++){
      if(arr[i]){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}
// console.log(bouncer([7, "ate", "", false, 9]));

//3. Basic Algorithm Scripting: Where do I Belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
      return a - b;
    }); //40,60
  console.log(arr);
  for(let i=0;i<arr.length;i++){
      if(num <= arr[i]){
          return i;
      }
  }
  return arr.length;
}
//   console.log(getIndexToIns([40, 60], 50));

//4. Basic Algorithm Scripting: Mutations
function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for(let i=0;i<str2.length;i++){
      if(str1.indexOf(str2[i])<0){
          return false;
      }
  }
  return true;
}

//  console.log(mutation(["hello", "hey"]));

//5. Basic Algorithm Scripting: Chunky Monkey
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for(let i=0;i<arr.length;i+=size)
      newArr.push(arr.slice(i,i+size));
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

function repeatStringNumTimes(str, num) {
  // repeat after me
  let tmpStr = "";
  for(let i=0;i<num;i++){
    tmpStr = tmpStr.concat(str);
  }
  return tmpStr;
}

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
    str = str.slice(0,num).concat('...');
  }
  return str;
}
// Basic Algorithm Scripting: Finders Keepers
function findElement(arr, func) {
  for(let i=0;i<arr.length;i++){
      if(func(arr[i])){
          return arr[i];
      }
  }
  return;
}
// Basic Algorithm Scripting: Boo who
function booWho(bool) {
  return typeof(bool) === typeof(true);
}

// Basic Algorithm Scripting: Title Case a Sentence
function titleCase(str) {

    let stringArr = str.split(" ");
    let stringVal ="";
    for(let i=0;i<stringArr.length;i++){
        stringVal += stringArr[i].charAt(0).toUpperCase()+stringArr[i].slice(1)+" ";
    }
    return stringVal.trim();
}

// console.log(titleCase("I'm a little tea pot"));

