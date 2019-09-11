// Intermediate Algorithm Scripting: Pig Latin
function translatePigLatin(str) {
    //console.log(str);
    str = [...str];
    let oldStr = [...str];
    let newStr = [];
    let vowel = 'aeiou';
    let flag = true;
    let sizeFlag =false;
    for(let i=0;i<oldStr.length;i++){
      let ch = oldStr[i];
      if(i==0 && vowel.indexOf(ch) !== -1){
        // newStr.push(oldStr.join(""));
        
        sizeFlag = true;
        break;
      }
        
        if(vowel.indexOf(ch) === -1 && flag){
           str.splice(str.indexOf(ch),1);
           newStr.push(ch);
        } else {
          flag = false;
          
        }
        console.log(newStr);
    }
    if(sizeFlag){
      newStr.push('way');
    } else{
      newStr.push('ay');
    }
   newStr.unshift(str.join(""));
   return newStr.join("");
}

console.log(translatePigLatin("algorithm"));