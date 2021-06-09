const express = require('express');
const app = express();



app.get('/', (req, res, next) => {
     res.status(200).send({
         code:200,
        message:`We will dockerize his app.....yihaaaaa`,
        data: null
    })
})


app.listen('3000', () =>{
    console.log("server running......")
})