// import logo from './logo.svg';
import {useState, useEffect} from 'react'
// import Random from '../Random/Random'
// import ErrorPage from '../ErrorPage/ErrorPage'
// import { ApiData } from '../API/AppiCalls';
import PopUp from '../Modal/PopUp';
import './App.css';
// ApiData.fetchAll() fetches object

const  App = () => {
  const [timedPopUp, setTimedPopUp] = useState(false)
  

  // useEffect(() => {
  //   setTimeout(() => {
  //   setTimedPopUp(true)
  //   }, 2500)
  // })

  return (
    <div className="App-container">
    <main className="App">
      <header>
      {/* <h1 className="title"> RAG Time </h1> */}
      </header>
      {/* <Random/> */}
      <PopUp trigger={timedPopUp}/>
    </main>
    </div>
  );
}

export default App;
