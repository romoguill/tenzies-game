import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

import './styles.css';
import Title from './Components/Title';
import Die from './Components/Die';
import { useState, useEffect } from 'react';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        handleClick={holdDice}
      />
    );
  });

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld
            ? { ...die }
            : {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
              };
        })
      );
    }
  }

  function holdDice(dieId) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === dieId) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        } else {
          return { ...die };
        }
      })
    );
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allEqual = dice.every((die) => die.value === firstDieValue);
    if (allHeld && allEqual) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <main className="App">
      <div className="container">
        {tenzies && <Confetti />}
        <Title />
        <section className="section--dice">{diceElements}</section>
        <button onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
      </div>
    </main>
  );
}

export default App;
