import { useState } from 'react';
import './App.css';
import { Loading } from './component/loading';
import { getAllQuotes } from './services/apiQuote';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const onFetchQuotes = async () => {
    setLoading(true);
    const res = await getAllQuotes();
    setLoading(false);
    setQuotes(res);
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
                <div className='button'>Fetch a random Quote</div>
                <div className='button' onClick={onFetchQuotes}>
                  Fetch all Quotes
                </div>
                <input type='text' />
                <div className='button'>Fetch by Author</div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>{activePage === 'addQuote' && <Add />}</div>
      <div>
        {quotes.map((quote, index) => (
          <div key={index}>{quote.text}</div>
        ))}
      </div>
    </>
  );
}

export default App;
