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
  const { person: text } = req.query;
  if (!text) {
    res.send(quotes);
  } else {
    const textLowerCase = text.toLowerCase();

    const allMatchQuotes = quotes.filter((quote) => {
      const personArr = quote.person.split(' ');
      return personArr.some((person) =>
        person.toLowerCase().startsWith(textLowerCase)
      );
    });
    res.send(allMatchQuotes);
  }
});

app.get('/quotes/:id', (req, res) => {
  const { id } = req.params;
  const quoteByIndex = quotes.at(id);
  if (quoteByIndex) {
    res.send(quoteByIndex);
  } else {
    res.send(quotes[0]);
  }
});

app.listen(port, () => {
  console.log(`Server is listen on ${port}`);
});
