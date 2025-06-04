import express from 'express';
import { quotes } from './quotes.js';
const app = express();
const port = 3000;
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, 'http://localhost:5173');
  next();
};

app.use(allowCrossDomain);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/quotes', (req, res) => {
  res.send(quotes);
});
app.listen(port, () => {
  console.log(`Server is listen on ${port}`);
});
