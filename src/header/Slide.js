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
            <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/47684703_716973225339560_3899526057874685952_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=6lJ3AfkbC3MAX8wCRcY&_nc_ht=scontent.fdad2-1.fna&oh=e6927c148232480d528a7c040b6d2103&oe=6032A9BC" alt="banner" width="100%"  />
            <SlideFooter />
        </div>
        )
    }
}
export default Slide;