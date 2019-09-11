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

