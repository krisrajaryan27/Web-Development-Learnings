class OwnArray extends Array{
    constructor(...args){
        super(...args);
    }
    public map() {
        // implementation
        return this;
    }
}
function map(array){
    // takes an array as the first argument
    // implementation

}
function forEach(array,callback){
    const { length } = array;
    for(let index = 0; index < length; index += 1){
        const value = array[index];
        callback(value, index, array);
    }
}

// function logOperation(operationName, array, callback){
//     const input = [...array];
//     const result = callback(array);
//     console.log({
//         operation: operationName,
//         arrayBefore: input,
//         arrayAfter: array,
//         mutates: mutatesArray(input,array),
//         result,
//     });
// }
// function getTodosWithCategory(todos, category){
//     return todos
//             .filter(todo => todo.category === category)
//             .map(todo => normalize(todo));
// }