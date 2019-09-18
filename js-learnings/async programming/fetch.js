// Fetch is a new-ish, promise-based API that lets us do Ajax requests 
// without all the fuss associated with XMLHttpRequest
// fetching resources from an API.
const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => res.map(user => user.username))
    .then(userNames => console.log(userNames));

const myPost = {
    title: 'A post about true facts',
    body: 42,
    userId: 2
}

const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch('https://jsonplaceholder.typicode.com/posts',options)
    .then(res => res.json())
    .then(res => console.log(res));

fetch('https://jsonplaceholder.typicode.com/postsZZZ', options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject({ status: res.status, statusText: res.statusText });
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log('Error, with message:', err.statusText));

async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);

    console.log(data);
   }
fetchUsers('https://jsonplaceholder.typicode.com/users');