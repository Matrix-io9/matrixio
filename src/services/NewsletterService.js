const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("matrixiodb").collection("mewsletter_members");
    // perform actions on the collection object
    console.log(collection)
    client.close();
});