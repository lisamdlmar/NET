import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import API from './ controllers/api'

const app = express();
const router = express.Router();
const port = 3000;


// parse application/json 
app.use(bodyParser.json());
// create "middleware"
app.use(morgan('combined'))
// Router
app.use(router);


router.get('/', (req, res) => {
 return res.send('Hello from / server side !! : )');
});


router.post('/api/v1/parse',API.APIV1);
//router.post('/api/v2/parse',controller.APIV2);

   
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`I am listening on ${port}`);
});