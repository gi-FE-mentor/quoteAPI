import { useState } from 'react';
import './App.css';
import { HomePage } from './pages/home';

function App() {
  const [activePage, setActivePage] = useState('home');

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

      <div>{activePage === 'home' && <HomePage />}</div>
      <div>{activePage === 'addQuote' && <Add />}</div>
    </>
  );
}

export default App;
