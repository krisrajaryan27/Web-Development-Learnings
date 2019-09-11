// Functional Programming: Combine an Array into a String Using the join Method
function sentensify(str) {
  // Add your code below this line
  return str.split(/[" ",-?@.]+/).join(" ");
  
  
  // Add your code above this line
}
console.log(sentensify("The.force.is.strong.with.this.one"));