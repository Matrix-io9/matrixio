// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://matrixio:Matrix.io@9000@database.ipz0r.mongodb.net/Database?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("matrixiodb").collection("newsletter_members");
//     // perform actions on the collection object
//     console.log(collection)
//     client.close();
// });



// import mongoose from 'mongoose';
// const express = require('express');
// const app = express();
// const
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//     name: String,
//     email: String,
// });
// const Blog = mongoose.model('Blog', blogSchema);

// const uri = process.env.MONGO_URI;
// const client = new Blog(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const SendData = (email, name) => {
//     mongoose.connect(err => {
//         const collection = mongoose.db("matrixiodb").collection("newsletter_members");
//         // perform actions on the collection object
//         console.log(collection, email, name)
//         client.close();
//     });
// }

// export default SendData;

// export default (req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "application/json");
// }