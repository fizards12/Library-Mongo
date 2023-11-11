import express from "express";
import { connectToDb, getdb } from "./database";
const app = express();
const port = 3000;

//Database Connection
let database;
connectToDb((err) => {
  if (!err) {
    //Start The Server
    app.listen(port, () => {
      console.log("http://localhost:3000");
    });
    database = getdb();
  }
});

app.get("/books", (req, res) => {
  database
    .collection("books")
    .find()
    .sort({author : -1})
    .toArray()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json({ err: err }));
});
