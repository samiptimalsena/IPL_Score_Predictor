import React from 'react'
import '../static/style.css'

export default (props) => {

    return (
        <div className="banner">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000">
                        <img src={props.a} alt="first" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.b} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.c} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.d} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.e} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.f} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.g} alt="second" />
                    </div>
                    <div className="carousel-item " data-interval="2000">
                        <img src={props.h} alt="second" />
                    </div>
                </div>
            </div>
        </div>
    )
}