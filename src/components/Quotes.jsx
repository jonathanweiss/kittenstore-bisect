import React from 'react';
import { getAllQuotes } from '../tools/quotes';

const Quotes = () => (
  <div className="columns">
    <div className="column col-12">
      <h1>Cat quotes</h1>
      {getAllQuotes().map((quote, index) => (
        <p key={index}>{quote}</p>
      ))}
    </div>
  </div>
);

export default Quotes;
