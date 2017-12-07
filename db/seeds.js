const Message = require("../db/connection.js").Message;
const seedData = require("./seeds.json");

Message.remove({})
  .then(() => {
    return Message.collection.insert(seedData);
    console.log("insertedd");
  })
  .then(() => {
    process.exit();
  })
  .catch(err => {
    console.log(err);
  });
