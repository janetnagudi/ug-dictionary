const express = require('express')
const router = express.Router()
const Word = require('../models/blob')

//REST API
//Get words ALL
//cant  test rest api well in browser tho -res.send('Hello World') can use postman or rest client
router.get('/', async (req, res) => {
try {
  const words = await Word.find()
  res.json(words)
} catch (err) {
  res.status(500).json({ message: err.message })
}
})
//Get words ONE by ID -colon means parameter -  req.params.id

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})


//Post(create on entire resource) ONE
//201 created something succesful- an object specific
//400 status- client-user input is wrong not the server like 500
router.post('/', async (req, res) => {
const word = new Word({
  luganda: req.body.luganda,
  english: req.body.english
})
try {
  const newWord = await word.save()
  res.status(201).json(newWord)
} catch (err) {
  res.status(400).json({ message: err.message })
}

})


//PUT(update) ONE- patch vs put- patch for only word piece of info?
router.patch('/:id', (req, res) => {
  
})
//Delete
router.get('/:id', (req, res) => {
  
})

module.exports = router
//rest and rest endpints