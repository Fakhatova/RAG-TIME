import {useState, useEffect} from 'react'
import {Route, Switch, useHistory} from 'react-router-dom';
import Activity from '../Activity/Activity'
import Favorites from '../Favorites/Favorites';
import ErrorPage from '../ErrorPage/ErrorPage'
import PopUp from '../Modal/PopUp';
import './App.css';

const  App = () => {
  const [timedPopUp, setTimedPopUp] = useState(false)
  const history = useHistory()

   // ***********************************************
        /* MODAL POPUP SET TIME IN USEEFFECT*/ 
   // ***********************************************
  useEffect(() => {
    setTimeout(() => {
    setTimedPopUp(true)
    }, 2500)
  }, [])
  
   // ***********************************************
        /*BUTTON SUBMIT HANDLE FOR ACTIVITY START*/ 
   // ***********************************************
  const handleStartBtn = (e) => {
  e.preventDefault()
  history.push('/Activity')
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
        <Route exact path='/Activity' render={({match}) => {
          return (
            <Activity/>
          )
        }}/>
        <Route exact path='/Activity/Favorites' render={({match}) => {
          return (
            <Favorites/>
          )
        }}/>
        <Route exact path='/Activity/ErrorPage' render={({match}) => {
          return (
            <ErrorPage/>
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;
