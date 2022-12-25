const http = require("http");
const express = require("express");
const mongoConnect = require("./Util/database");

const app = express();
mongoConnect();
app.get("/name", (req, res) => {
  res.json('{ name: "rahul" }');
});
app.listen(5000);
// const server = http.createServer(app);
