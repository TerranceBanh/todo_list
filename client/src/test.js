require('isomorphic-fetch');

fetch('http://localhost:2345/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ posts { title } }' }),
})
  .then(res => res.json())
.then(res => console.log(res.data));
