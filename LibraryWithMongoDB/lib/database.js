"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getdb = exports.connectToDb = void 0;
var _mongodb = require("mongodb");
var dbConnection;
var connectToDb = exports.connectToDb = function connectToDb(callBackfn) {
  _mongodb.MongoClient.connect("mongodb://mahmoud:164253@127.0.0.1:27017/library?directConnection=true&authMechanism=DEFAULT&authSource=admin").then(function (database) {
    dbConnection = database.db();
    return callBackfn();
  })["catch"](function (err) {
    console.log(err);
    return callBackfn(err);
  });
};
var getdb = exports.getdb = function getdb() {
  return dbConnection;
};