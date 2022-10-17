require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

const wordsRouter = require('./routes/words')
app.use('/words', wordsRouter)

//'localhost:3000/words'

//need spend more time server side

app.listen(3000, () => console.log('Server Started'))