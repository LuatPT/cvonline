import React from 'react';
import SlideFooter from './SlideFooter';

class Slide extends React.Component{
    render(){
        return(
        <div className="slideShow">
            <div id="carouselExampleIndicators" className="slideShowDetail carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>JAVASCRIPT</h2>
                        <p>I develop website using Bootstrap, ReactJS, ...</p>
                    </div>
                    <div className="carousel-item">
                        <h2>JAVA, NODEJS</h2>
                        <p>I develop website using Spring, Strut1, Express,...</p>
                    </div>
                    <div className="carousel-item">
                        <h2>OTHERS</h2>
                        <p>Create testcase with Excel and use VBA to auto test it...</p>
                    </div>
                </div>
                <ol className="carouselBtn">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            </div>
            <img src="https://i.imgur.com/DKEPdzi.jpg" alt="banner" width="100%"  />
            <SlideFooter />
        </div>
        )
    }
}
export default Slide;