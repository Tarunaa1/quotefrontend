import React, { useEffect, useState } from "react";
import "../App.css";

const API_URL = "https://quotedata.onrender.com/";

export default function Quotegenerator() {
  const [apidata, setApidata] = useState([{}]);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    fetch(API_URL + "quotes")
      .then((response) => response.json())
      .then((data) => {
        setApidata(data);
        setRandomQuote(data);
      });
  }, []);

  const changequote = () => {
    window.location.reload();
    setRandomQuote(apidata);

  };

  return (
    <div className="container">
      <div className="header">
        <h2>Quote Generator</h2>
      </div>
      <div className="main-content">
        <div className="text-area">
          <span className="quote">
            {randomQuote ? (
              <div className="quote-container">
                <p className="quote-text">"{randomQuote.quote}"</p>
              </div>
            ) : (
              // <p>"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"</p>
              <p>...</p>
            )}
          </span>
        </div>
        <div className="person">
          {randomQuote ? (
            <div className="quote-container">
              <p className="author-text">- {randomQuote.person}</p>
            </div>
          ) : (
            // <p>
            //     "Oprah Winfrey"     
            // </p>
            <p>...</p>
          )}
        </div>
        <div className="button-area">
          <button id="new" onClick={changequote}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
