const dotenv = require("dotenv");
dotenv.config();
const Db = process.env.MONGODB;
const mongoose = require ("mongoose");

const client = mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
() => console.log("MongoDB connected")
).catch( 
  (error) => console.error(error)
)

module.exports = client;
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };