import React from 'react';
import SlideFooter from './SlideFooter';

class Slide extends React.Component{
    render(){
        return(
        <div className="slideShow">
            <div id="carouselExampleIndicators" className="slideShowDetail carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>Header</h2>
                        <p>Header fafafaf</p>
                    </div>
                    <div className="carousel-item">
                        <h2>Header2</h2>
                        <p>Header vafafafaf</p>
                    </div>
                    <div className="carousel-item">
                        <h2>Header23123</h2>
                        <p>Header fafaf</p>
                    </div>
                </div>
                <ol className="carouselBtn">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>
            <img src="https://demo.themezy.com/system/resources/demo_themes/000/000/188//images/banner-bg.jpg" alt="banner" width="100%"/>
            <SlideFooter />
        </div>
        )
    }
}
export default Slide;