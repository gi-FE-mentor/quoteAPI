export const getAllQuotes = async () => {
  const quotes = await fetch('http://localhost:3000/quotes');
  debugger;
  const data = await quotes.json();
  return data;
};
