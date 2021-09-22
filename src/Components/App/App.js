// import logo from './logo.svg';
import {useState} from 'react'
import Random from '../Random/Random'
import ErrorPage from '../ErrorPage/ErrorPage'
import { ApiData } from '../API/AppiCalls';
import PopUp from '../Modal/PopUp';
import './App.css';
import react from 'react'
// ApiData.fetchAll() fetches object

const  App = () => {
  const [popup, setPopUp] = useState(false)

  return (
    <div className="App-container">
    <main className="App">
      <header>
      <h1 className="title"> RAG Time </h1>
      </header>
      {/* <Random/> */}
      <PopUp trigger={true}/>
    </main>
    </div>
  );
}

export default App;
