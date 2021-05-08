import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Main from './components/Main'
import Footer from './components/Footer'

function LandingPage({onRouteChange, setRoute, route}) {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Main onRouteChange={onRouteChange} route={route} setRoute={setRoute}/>
            <Footer />
        </div>
    )
}

export default LandingPage
