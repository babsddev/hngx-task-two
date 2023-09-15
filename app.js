const express = require('express')
const connectdb = require('./dbconnect/connect')
require('dotenv').config()
const personRouter = require('./routes/router')

const app = express()
app.use(express.json())
app.use('/api', personRouter)

const PORT = process.env.PORT || 3101

const start = async () => {
  await connectdb(process.env.MONGOURL)
  app.listen(PORT, console.log(`running on port ${PORT}`))
}
start()
