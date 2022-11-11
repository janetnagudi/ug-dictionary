const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const { client } = require("./db/conn");
const {seedDatabase} = require("./seed")

// app.listen(port, () => {
//   // perform a database connection when server starts
//   client.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });

// seedDatabase();

/* Local server
const express = require('express')
require('dotenv').config()

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
*/