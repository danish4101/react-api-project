import React, { useState, useEffect } from 'react';
import './QuotesApp.css';

const QuotesApp = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => console.log(error));
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <button className="button" onClick={refreshPage}>
          Randomize
        </button>
      </div>
      <h1>Quotes!!!</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesApp;
