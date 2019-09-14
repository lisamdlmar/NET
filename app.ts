import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';

const app = express();

const port = 3000;

// parse application/json 
app.use(bodyParser.json())
// create "middleware"
app.use(morgan('combined'))


app.get('/', (req, res) => {
  res.send('Hello from / server side !! : )');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`I am listening on ${port}`);
});