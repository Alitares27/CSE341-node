const express = require('express');
const app = express();

const mongodb = require('./database');

const port = 8080;

app.use(express.static('frontend'));

mongodb.initDb((err)=> {
  if(err){
    console.log(err)
  } else{

    app.listen(process.env.PORT || port, () => {
      console.log('Web Server is listening at port ' + (process.env.PORT || port));
    });

  }});
