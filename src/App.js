import Main from './components/Main/Main'
import {useState} from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import RescueSession from './components/Pages/Rescue-Sessions/RescueSession'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import CovidIsolation from './components/Pages/CovidIsolation/CovidIsolation'
import Services from './components/Pages/Services/Services'


function App() {

  const [route, setRoute] = useState('landingpage')

  function onRouteChange(route){
    setRoute('register');
  }
 
  return (
    <div>
    {
      route === 'landingpage' ?
      <LandingPage onRouteChange={onRouteChange} route =  {route} setRoute={setRoute}/>
      :
        ( route === 'home' ?
        <Services onRouteChange={onRouteChange} route =  {route} setRoute={setRoute}/>
        :
        <div>
        <Header onRouteChange={onRouteChange} route =  {route} setRoute={setRoute}/>
        <Main onRouteChange={onRouteChange}  route =  {route} setRoute={setRoute}/>
        </div>
        )
    }
    </div>

  );
}

export default App;
