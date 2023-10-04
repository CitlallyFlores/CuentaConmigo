var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hola Marta')
})
app.get("/cicla", (req, res) => {
  res.send("Hello cicla, would you like to go the cinema?")
})
app.listen(3000, () => {
  console.log("se inicio servidor");
})
