
// Functional Programming: Implement the filter Method on a Prototype

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for(let index = 0; index < this.length;index++){
      if(callback(this[index],index,this)){
        newArray.push(this[index]);
      }
  }
  // Add your code above this line

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});