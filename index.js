const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const fileUpload = require("express-fileupload");
const fs = require("fs-extra");
const ObjectID = require('mongodb').ObjectId;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()


const port = 5000


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());


app.get('/', (req, res) => {
  res.send('Hello Coders, Welcome to Blood Cell')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cyf7w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const aPositiveCollection = client.db("bloodCell").collection("aPositiveCollection");
  const aNegativeCollection = client.db("bloodCell").collection("aNegativeCollection");
  const bPositiveCollection = client.db("bloodCell").collection("bPositiveCollection");
  const bNegativeCollection = client.db("bloodCell").collection("bNegativeCollection");
  const oPositiveCollection = client.db("bloodCell").collection("oPositiveCollection");
  const oNegativeCollection = client.db("bloodCell").collection("oNegativeCollection");
  const abPositiveCollection = client.db("bloodCell").collection("abPositiveCollection");
  const abNegativeCollection = client.db("bloodCell").collection("abNegativeCollection");


  // Add A Positive Blood Group In Database 

  app.post('/aPositive', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    aPositiveCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("A Positive Blood Group Added")
      });
  });


  // Add A Negative Blood Group In Database 

  app.post('/aNegative', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    aNegativeCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("A Negative Blood Group Added")
      });
  });


  // Add B Positive Blood Group In Database 

  app.post('/bPositive', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    bPositiveCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("B Positive Blood Group Added")
      });
  });


  // Add B Negative Blood Group In Database 

  app.post('/bNegative', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    bNegativeCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("B Negative Blood Group Added")
      });
  });


  // Add O Positive Blood Group In Database 

  app.post('/oPositive', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    oPositiveCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("O Positive Blood Group Added")
      });
  });


  // Add O Negative Blood Group In Database 

  app.post('/oNegative', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    oNegativeCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("O Negative Blood Group Added")
      });
  });


  // Add AB Positive Blood Group In Database 

  app.post('/abPositive', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    abPositiveCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("AB Positive Blood Group Added")
      });
  });


  // Add AB Negative Blood Group In Database 

  app.post('/abNegative', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const group = req.body.group;
    const occupation = req.body.occupation;
    abNegativeCollection.insertOne({ name, mobile, address, group, occupation })
      .then((result) => {
        res.send(result.insertedCount > 0);
        console.log("AB Negative Blood Group Added")
      });
  });








  console.log("Database Connection Successfully");
});



app.listen(process.env.PORT || port)