// Functional Programming: Implement map on a Prototype
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for(let index = 0; index < this.length; index++){
    newArray.push(callback(this[index],index,this));
  }
  // Add your code above this line
  return newArray;

};
//callback = function(value,index,array){}
var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);