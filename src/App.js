import './styles.css';
import Title from './Components/Title';
import Die from './Components/Die';
import { useState } from 'react';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die} />
  ));

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceArray;
  }

  function rollDice() {
    const newDice = allNewDice();
    setDice(newDice);
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
