export const getAllQuotes = async () => {
  const quotes = await fetch('http://localhost:3000/quotes');
  const data = await quotes.json();
  return data;
};

export const getQuoteById = async (id: string) => {
  const quote = await fetch(`http://localhost:3000/quotes/${id}`);
  const data = await quote.json();
  return data;
};

export const getQuoteByPerson = async (person: string) => {
  const quote = await fetch(`http://localhost:3000/quotes?person=${person}`);
  const data = await quote.json();
  return data;
};
