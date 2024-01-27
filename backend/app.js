const express = require('express')
const app = express()
const port = 4001

const indexjs = require("./index")
const userRoute = require("./src/controllers/users")

app.get('/', (req, res) => {
  const result = indexjs.welcomeFunction()
  console.log(`Hello World! ${result}`)
  res.send(`Hello World! ${result}`)
})

app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})