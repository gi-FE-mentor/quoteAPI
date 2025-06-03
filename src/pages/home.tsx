import './home.css';

export const HomePage = () => {
  return (
    <div className='home'>
      <h2>Get Quotes</h2>
      <div className='buttons'>
        <div className='button'>Fetch a random Quote</div>
        <div className='button'>Fetch all Quotes</div>
        <input type='text' />
        <div className='button'>Fetch by Author</div>
      </div>
    </div>
  );
};
