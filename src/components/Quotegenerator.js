import React, { useEffect, useState } from "react";
import "../App.css";

const API_URL = "https://quotedata.onrender.com";

export default function Quotegenerator() {
  const [apidata, setApidata] = useState([{}]);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    fetch(API_URL + "quotes")
      .then((response) => response.json())
      .then((data) => {
        setApidata(data);
        setRandomQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);
  
  const changequote = () => {
    setRandomQuote(apidata[Math.floor(Math.random() * apidata.length)]);
  };

  return (
    <div className="container">
      <div class="header">
        <h2>Quote Generator</h2>
      </div>
      <div class="main-content">
        <div class="text-area">
          <span class="quote">
            {randomQuote ? (
              <div className="quote-container">
                <p className="quote-text">"{randomQuote.quote}"</p>
              </div>
            ) : (
              <p>Loading</p>
            )}
          </span>
        </div>
        <div class="person">
          {randomQuote ? (
            <div className="quote-container">
              <p className="author-text">- {randomQuote.person}</p>
            </div>
          ) : (
            <p>
                Loading     
            </p>
          )}
        </div>
        <div class="button-area">
          <button id="new" onClick={changequote}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
