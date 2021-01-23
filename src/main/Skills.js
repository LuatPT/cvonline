import React from 'react';
import SkillHeader from './SkillItemHeader';

class Skills extends React.Component{
    
    render(){
        let listSkill = [
            {id:1, header: "Programming Skills", content: "It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping make great ideas happen for the past 7 years and am always ready for new challenges."},
            {id:2, header: "Designing Skills", content: "Problem solving is not always about sitting in a board room talking about the way things should be done. I have a strong background in UI design which allows ready for new challenges."},
        ];
        return(
        <div className="skills" id="Skills" >
            <div className="skillItemHeader row">
               {
                listSkill.map((ele,key) => <SkillHeader key={key} {...ele}/>)
                 }
             </div>
            
        </div>  
        )
    }
}
export default Skills;