import React from 'react'
import Badak from '../assets/Badak.png'
import './LandingPage.css'

export default function Main({onRouteChange, route, setRoute}) {

    function toRegister(route){
        setRoute('register')
    }

    return (
    <div>
        <div  class="container"> 
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
            <img src={Badak} class="img-fluid width" />
        
            </div>
            
            <div class="col-lg-6 col-md-6 col-12 center">
            <h2>What we do?</h2>
            <hr/>
            <p>
            
            </p>   
            </div>
            <button class="btn btn-primary btn-wdth" type="submit" onClick={toRegister}>Sign In/Sign Up</button>

        </div>
        </div>
    </div>
    )
}
