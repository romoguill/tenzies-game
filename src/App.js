import './styles.css';
import Title from './Components/Title';
import Die from './Components/Die';

function App() {
  return (
    <main className="App">
      <div className="container">
        <Title />
        <section className="section--dice">
          <Die value="2" />
          <Die value="5" />
          <Die value="1" />
          <Die value="2" />
          <Die value="5" />
          <Die value="6" />
          <Die value="4" />
          <Die value="1" />
          <Die value="4" />
          <Die value="3" />
        </section>
      </div>
    </main>
  );
}

export default App;
