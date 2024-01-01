const axios = require('axios');

console.log('1234');

console.log(111+333);

axios("https://catfact.ninja/fact1")
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error.response.data)
    })
    .then(()=>{
        console.log("всё готово")
    })