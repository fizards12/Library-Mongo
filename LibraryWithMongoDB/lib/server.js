"use strict";

var _express = _interopRequireDefault(require("express"));
var _database = require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = 3000;

//Database Connection
var database;
(0, _database.connectToDb)(function (err) {
  if (!err) {
    //Start The Server
    app.listen(port, function () {
      console.log("http://localhost:3000");
    });
    database = (0, _database.getdb)();
  }
});
app.get("/books", function (req, res) {
  database.collection("books").find().sort({
    author: -1
  }).toArray().then(function (result) {
    console.log(result);
    res.status(200).json(result);
  })["catch"](function (err) {
    return res.status(500).json({
      err: err
    });
  });
});