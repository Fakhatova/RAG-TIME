// import logo from './logo.svg';
import Random from '../Random/Random'
import ErrorPage from '../ErrorPage/ErrorPage'
import { ApiData } from '../API/AppiCalls';
import './App.css';
// ApiData.fetchAll() fetches object

function App() {
  return (
    <main className="App">
      <header>
      <h1 className="title"> RAG Time </h1>
      </header>
      <article className="intro-container">
      <p> here is gonna be intro and rules about application</p>
      </article>
      <button className="start-btn"> Lets get started </button>
      <Random/>
    </main>
  );
}

export default App;
