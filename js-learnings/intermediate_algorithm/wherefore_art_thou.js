// Intermediate Algorithm Scripting: Wherefore art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  return collection.filter(obj => {
    let match = true;
    Object.keys(source).forEach(key => {
        if(!obj[key] || obj[key]!==source[key]){
            match = false;
        }
    });
    return match;
  });
  // Only change code above this line
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
let arr = [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
console.log(whatIsInAName(arr, { "apple": 1, "bat": 2 }));