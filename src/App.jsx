import Cards from './components/cards';
import CardGenerator from './components/CardGenerator';
import './styles/css/app.css';


function App() {
  return (
    <div className="App">
        <div  className="intro">
          <h1 className="title">Lista de Afazeres</h1>
          <h3 className="subtitle">Coloque aqui suas tarefas para ter um melhor controle</h3>
          <CardGenerator />
          <Cards/>
        </div>
    </div>
  );
}

export default App;
