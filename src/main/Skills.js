import React from 'react';
import SkillHeader from './SkillItemHeader';

class Skills extends React.Component{
    
    render(){
        let listSkill = [
            {id:1, header: "Back End Skills", content: "I worked with Java about 1 year. I have used Strut1, Spring Framework for project."},
            {id:2, header: "Front End Skills", content: "I have knowledge with Javascript. I have used NodeJs, ReactJs with Redux(to manage state). "},
            {id:3, header: "Others Skills", content: "With testing, I used VBA to create and execute testcase faster."},
        ];
        return(
        <div className="skills" id="Skills" >
            <div class="heading text-center">
                <h2>My Skills</h2>
                <p>I'm a backend developer. But I have a little knowledge about front end. Please refer it below.</p>
            </div>
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