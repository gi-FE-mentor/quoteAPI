import { useState } from 'react';
import './App.css';
import { Loading } from './component/loading';
import {
  getAllQuotes,
  getQuoteById,
  getQuoteByPerson,
} from './services/apiQuote';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const onFetchQuotes = async () => {
    setQuotes([]);
    setLoading(true);
    setTimeout(async () => {
      const res = await getAllQuotes();
      setLoading(false);
      setQuotes(res);
    }, 1000);
  };

  const onFetchRandomQuote = async () => {
    setQuotes([]);
    setLoading(true);
    setTimeout(async () => {
      const randomId = Math.floor(Math.random() * 20);
      const res = await getQuoteById(randomId);
      setLoading(false);
      setQuotes([res]);
    }, 1000);
  };

  const onFetchQuotesByAuthor = async () => {
    setQuotes([]);
    setLoading(true);
    setTimeout(async () => {
      const res = await getQuoteByPerson(searchInput);
      setLoading(false);
      setQuotes(res);
    }, 1000);
  };
  return (
    <>
      <h1>Quote API</h1>
      <div className='nav'>
        <div
          className='button'
          onClick={() => {
            setActivePage('home');
          }}
        >
          Home
        </div>
        <div
          className='button'
          onClick={() => {
            setActivePage('addQuote');
          }}
        >
          Add a new quote
        </div>
      </div>
      {loading && <Loading />}

      <div>
        {activePage === 'home' && (
          <>
            <div className='home'>
              <h2>Get Quotes</h2>
              <div className='buttons'>
                <div className='button' onClick={onFetchRandomQuote}>
                  Fetch a random Quote
                </div>
                <div className='button' onClick={onFetchQuotes}>
                  Fetch all Quotes
                </div>
                <input
                  type='text'
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <div className='button' onClick={onFetchQuotesByAuthor}>
                  Fetch by Author
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>{activePage === 'addQuote' && <Add />}</div>
      <div style={{ marginTop: '20px' }}>
        {quotes.map((quote, index) => (
          <div key={index}>
            {quote.text}
            <div className='person'> - {quote.person}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
