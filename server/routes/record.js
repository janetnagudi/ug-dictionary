const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("employees");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;

 /* merging
//REST API
//Get words ALL
//cant  test rest api well in browser tho -res.send('Hello World') can use postman or rest client
router.get('/word', async (req, res) => {
try {
  const words = await Word.find()
  res.json(words)
} catch (err) {
  res.status(500).json({ message: err.message })
}
})
//Getting words ONE by ID GET-colon means parameter -  req.params.id

router.get('/:id', getWord,(req, res) => {
  res.send(req.word.luganda)
})
//Post(create on entire resource) ONE
201 created something succesful- an object specific
400 status- client-user input is wrong not the server like 500

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

async function getWord(req, res, next) {
  let word
  try {
    word = await Word.findById(req.params.id)
    if(word == null) {
      return res.status(404).json({ message: 'Cannot find word' })
    }
  
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.word = word
  next()
}

module.exports = router
//rest and rest endpoints

merging*/











/* Original code
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
//Getting words ONE by ID GET-colon means parameter -  req.params.id

router.get('/:id', getWord,(req, res) => {
  res.send(req.word.luganda)
})
//Post(create on entire resource) ONE
201 created something succesful- an object specific
400 status- client-user input is wrong not the server like 500

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

async function getWord(req, res, next) {
  let word
  try {
    word = await Word.findById(req.params.id)
    if(word == null) {
      return res.status(404).json({ message: 'Cannot find word' })
    }
  
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.word = word
  next()
}

module.exports = router
//rest and rest endpoints

orginal code*/