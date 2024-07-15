
const express = require('express')
const urlRoute = require("./routes/url")
const {connectToMongoDB} = require('./connect')
const app = express()
const port = 3000

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('mongodb is connect!'))

app.use('/url',urlRoute)
app.use(express.json())


app.listen(port, () => {
  console.log(`This server is start http://localhost:${port}`)
})