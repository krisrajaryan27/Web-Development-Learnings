// Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

// the global variable
var globalTitle = " Winter Is   Coming";

// Add your code below this line
function urlSlug(title) {
  return (title.trim().match(/\w+/g).join("-").toLowerCase());
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);