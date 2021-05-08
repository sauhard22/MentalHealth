import React from 'react'
import RescueSession from '../assets/RescueSession.jpg'
import Blogs from '../assets/Blogs.jpg'
import Games from '../assets/Games.jpg'
import HealthTest from '../assets/HealthTest.jpg'
import './LandingPage.css'


function Carousel() {
    return (
        
        <div id="demo" className="carousel slide carousel-fade" data-ride="carousel">
           
            <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            </ul>
        
        
        <div className="carousel-inner">
          
            <div className="carousel-item active">
                <img src={RescueSession} alt="Los Angeles" width="1100" height="500"/>
                <div className="carousel-caption d-none d-md-block">
                <a href="#">
                <h5>Rescue Sessions</h5>
                </a>
                <p>Description</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={HealthTest} alt="Chicago" width="1100" height="500"/>
                <div className="carousel-caption d-none d-md-block">
                <a href="#">
                <h5>Mental Health Test</h5>
                </a>
                <p>Description</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={Blogs} alt="New York" width="1100" height="500"/>
                <div className="carousel-caption d-none d-md-block">
                <a href="#">
                <h5>Blogs</h5>
                </a>
                <p>Description</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={Games} alt="New York" width="1100" height="500"/>
                <div className="carousel-caption d-none d-md-block">
                <a href ="#">
                <h5>Games</h5>
                </a>
                <p>Description</p>
                </div>
            </div>

        </div>

        <a className="carousel-control-next" href="#demo" data-slide="prev">
          <span className="carousel-control-next-icon"></span>
        </a>
        <a className="carousel-control-prev" href="#demo" data-slide="next">
          <span className="carousel-control-prev-icon"></span>
        </a>
    </div>

    

    )
}

export default Carousel
