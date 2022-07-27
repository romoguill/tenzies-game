import { nanoid } from 'nanoid';

import './styles.css';
import Title from './Components/Title';
import Die from './Components/Die';
import { useState } from 'react';

function App() {
  const [dice, setDice] = useState(allNewDice());

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
    const newDice = allNewDice();
    setDice(newDice);
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

  return (
    <main className="App">
      <div className="container">
        <Title />
        <section className="section--dice">{diceElements}</section>
        <button onClick={rollDice}>Roll</button>
      </div>
    </main>
  );
}

export default App;
