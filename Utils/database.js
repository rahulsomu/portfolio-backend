const { MongoClient } = require("mongodb");

const mongoConnect = () => {
  console.log("connected");
};

exports.mongoConnect = mongoConnect;
