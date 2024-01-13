const express = require('express');
const app = express();

const port = 8080;

app.use(express.static('frontend'));

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});
