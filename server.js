const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const userRoutes = require('./routes/users');

const port = 8080;

app.use('/', require('./routes/'));

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
            console.log('Database is listening and Node is listening on port ' + (process.env.PORT || port));
          });

        }
      });