import React from 'react';
import AboutMeItem from './AboutMeItem';

class AboutMe extends React.Component{
    render(){
        var listHeader = [
         {header: "Responsive Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.", css:"fa fa-desktop"},
         {header:"HTML5/CSS3 Dev", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.",css:"fa fa-css3"},
         {header: "JavaScript jQuery", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.", css:"fa fa-lightbulb-o"}];
        return(
            <div className="aboutMe" id="About Me">
                <div className="aboutMeHeader">
                    <h2>I am Luat, a Backend Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="row">
                        {
                            listHeader.map((ele,key) =>
                                <AboutMeItem key={key} {...ele}/>
                             ) 
                        }   
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutMe;