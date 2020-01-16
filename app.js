const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();
const port = process.env.PORT;

const db = require('./db')
try{
  db.connect();
} catch(err) {
  console.log("Error in DB Connection");
  console.log(err);
}

app.get('/', (req, res) => {
  res.send('It is working!');
});

const routes = require('./routes')
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});