const fetch = require("node-fetch");
// function that returns a promise that resolves to a string value after 2 seconds
function scaryClown(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Krishna is learning promise');
        },100);
    });
}

// async function that await for the promise to resolve before logging the message to the console
// await is a new operator used to wait for a promise to resolve or reject. 
// It can only be used inside an async function

async function msg1(){
    const message = await scaryClown();
    console.log("Message:",  message );
}

msg1();

function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }

function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }  

function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }

async function msg2() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
}
msg2();

async function msg3(){
    const [a,b,c] = await Promise.all([who(),what(),where()]);
    console.log(`${ a } ${ b } ${ c }`);
}
msg3();

// Async functions always return a promise

async function hello(){
    return 'Hello Alligator!';
}

hello().then(x => console.log(x));

// Async Function Expression using arrow function
const msg4 = async () => {
    const mesg = await scaryClown();
    console.log('Message',mesg);
}

// Error Handling
function yayOrNay(){
    return new Promise((resolve,reject) => {
        const value = Math.round(Math.random() * 1);  // 0 or 1 at random
        value ? resolve('Lucky!') : reject('Nope :(');
    });
}

async function msg5(){
    try{
        const message5 = await yayOrNay();
        console.log(message5);
    } catch(err){
        console.log(err);
    }
}
msg5().catch(x =>console.log(x));

function caserUpper(val){
    return new Promise((resolve,reject) => {
        resolve(val.toUpperCase());
    });
}

async function msg6(x){
    try{
        const message6 = await caserUpper(x);
        console.log(message6);
    }catch(err){
        console.log(err);
    }
}

msg6('Hello');


// Async Functions With Promise-Based APIS 
async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);
    console.log(data);
}
fetchUsers('https://jsonplaceholder.typicode.com/users');