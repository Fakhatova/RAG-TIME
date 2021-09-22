// import logo from './logo.svg';
import {useState, useEffect} from 'react'
import {Route, Switch, useHistory} from 'react-router-dom';
import Random from '../Random/Random'
// import ErrorPage from '../ErrorPage/ErrorPage'
// import { ApiData } from '../API/AppiCalls';
import PopUp from '../Modal/PopUp';
import './App.css';
// ApiData.fetchAll() fetches object

const  App = () => {
  const [timedPopUp, setTimedPopUp] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
    setTimedPopUp(true)
    }, 2500)
  }, [])
  
  const handleStartBtn = (e) => {
  e.preventDefault()
  history.push('/Activity')
  console.log('I am clicking')
  }
    return (
    <div className="App-container">
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <main className="App">
            <PopUp trigger={timedPopUp} handleStartBtn={handleStartBtn}/>
            </main>
          )
        }}/>
        <Route exact path='/:Activity' render={({match}) => {
          return (
            <Random/>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;
