var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hola Marta')
})

app.listen(3000,()=>{ 
    console.log("se inicio servidor");
})
