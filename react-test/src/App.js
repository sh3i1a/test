import fr from './quotes/fr.json';
import en from './quotes/en.json';

import Tab from './components/Tab';
import Card from './components/Card';

import { useState } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  function displayQuotes(lang) {
    setQuotes([]);
    lang.map((quote) => {
      setQuotes([quotes, quote]);
    });
  }

  return (
    <div className="App">
      <div>
        <Tab label="Français" onClick={() => displayQuotes(fr)}/>
        <Tab label="Anglais" onClick={() => displayQuotes(en)}/>
      </div>
      <div>
         {quotes.map((quote) => {
          <Card text={quote.text} author={quote.author}/>
         })}
      </div>
    </div>
  );
};

export default App;
