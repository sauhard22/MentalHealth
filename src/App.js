import Main from './components/Main/Main'
import {useState} from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import RescueSession from './components/Pages/Rescue-Sessions/RescueSession'

function App() {

  const [route, setRoute] = useState('register')

  function onRouteChange(route){
    setRoute('register');
  }
  
  return (
    <div>
    {
      route === 'home' ?
        <Home/>
      :
        <div>
        <Header onRouteChange={onRouteChange} route =  {route} setRoute={setRoute}/>
        <Main onRouteChange={onRouteChange}  route =  {route} setRoute={setRoute}/>
        </div>
    }  
    {/*<RescueSession/>*/}
    </div>
  );
}

export default App;
