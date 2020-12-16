import React, { useState } from 'react';
import { phrases } from './phrases';
import './App.scss';

const _game = () => {
  const availablePhrases = [...phrases];
  const usedPhrases = [];
  let currentPhrase = 0;

  const getItem = () => {
    const randomIndex = Math.floor(Math.random() * availablePhrases.length);
    currentPhrase = availablePhrases[randomIndex];
    usedPhrases.push(...availablePhrases.splice(randomIndex, 1));
    return currentPhrase;
  };

  const getAvailablePhrases = () => availablePhrases;
  const getUsedPhrases = () => usedPhrases;
  const getCurrentPhrase = () => currentPhrase;

  return { getItem, getUsedPhrases, getAvailablePhrases, getCurrentPhrase };
};

const game = _game();

const App = () => {
  const [currPhrase, setCurrPhrase] = useState('');

  const _getUsedPhrases = (letter) =>
    game
      .getUsedPhrases()
      .filter((phrase) => phrase[0] === letter)
      .map((item, index) => <p key={index}>{item[1]}</p>);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-scroller">
          <p className="App-section-heading">Z</p>
          {_getUsedPhrases('Z')}
          <p className="App-section-heading">I</p>
          {_getUsedPhrases('I')}
          <p className="App-section-heading">N</p>
          {_getUsedPhrases('N')}
          <p className="App-section-heading">G</p>
          {_getUsedPhrases('G')}
          <p className="App-section-heading">O</p>
          {_getUsedPhrases('O')}
        </div>
        <div className="App-actions">
          <button
            onClick={() => {
              setCurrPhrase(game.getItem());
            }}
          >
            Zing!
          </button>
        </div>
      </header>
      <main className="App-main">
        {currPhrase ? (
          <div>
            <div className="App-main__letter">
              <p>{currPhrase[0]}</p>
            </div>
            <p className="App-main__phrase">{currPhrase[1]}</p>
          </div>
        ) : (
          <div className="App-main__brand">Zingo!</div>
        )}
      </main>
    </div>
  );
};

export default App;
