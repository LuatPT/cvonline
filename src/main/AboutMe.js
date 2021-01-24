import React from 'react';
import AboutMeItem from './AboutMeItem';

class AboutMe extends React.Component{
    render(){
        var listHeader = [
         {header: "Back end", body: "Create business with Java. Using Spring framework to create faster", css:"fa fa-desktop"},
         {header:"Front end", body: "Create wonderful website UI/UX with Html/css. Use Javascript to build it easier",css:"fa fa-css3"},
         {header: "Other", body: "Using Excel, VBA to create testcase quickly. Use word to create document", css:"fa fa-lightbulb-o"}];
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