import { MongoClient } from "mongodb";
let dbConnection;
export const connectToDb = (callBackfn) => {
  MongoClient.connect(
    "mongodb://mahmoud:164253@127.0.0.1:27017/library?directConnection=true&authMechanism=DEFAULT&authSource=admin"
  ).then((database)=>{
    dbConnection = database.db();
    return callBackfn();
  }).catch(err=>{
    console.log(err);
    return callBackfn(err);
  });
};
export const getdb = ()=> dbConnection;
