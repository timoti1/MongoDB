const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://mongo-server:27017/";
const mongoClient = new MongoClient(url);

mongoClient.connect(function(err, client){

    const db = client.db("test");
    const collection = db.collection("person");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        console.log(results);
        client.close();
    });
});
