const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./data/database');
const userRoutes = require('./routes/users');

const port = 8080;

app.use(express.static('frontend'));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        })
        .use('/users', userRoutes);


      mongodb.initDb((err, mongodb) => {
        if (err) {
          console.log(err)
        } else {

          app.listen(process.env.PORT || port, () => {
            console.log('Web Server is listening at port ' + (process.env.PORT || port));
          });

        }
      });