const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = () => {
  MongoClient.connect(
    "mongodb+srv://rahulrana:rahul%40123@cluster0.5p67ahb.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      console.log(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
