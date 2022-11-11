const word = require("./models/word");
const data = require("./data.json");

exports.seedDatabase = async () => {
  await word.insertMany( data);
}
