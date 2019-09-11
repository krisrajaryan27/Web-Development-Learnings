// Intermediate Algorithm Scripting: Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for(let i = min; i <=max; i++){
        sum += i;
    }
    return sum;
}

function sumAllM2(arr) {
    const startNum = arr[0];
    const endNum = arr[1];
    const numCount = Math.abs(endNum-startNum)+1;
    return ((startNum+endNum)*numCount)/2;
}


console.log(sumAllM2([1, 4]));