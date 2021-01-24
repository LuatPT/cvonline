import React from 'react';
import SkillItemBody from './SkillItemBody'
class SkillHeader extends React.Component{
    
    render(){
        let listSkill = [
            {id:1, group: 1, value: "Java ", percent: 80},
            {id:2, group: 1, value: "Spring ", percent: 70},
            {id:3, group: 1, value: "Strut1 ", percent: 50},

            {id:4, group: 2, value: "HTML5/CSS3 ", percent: 80},
            {id:5, group: 2, value: "JavaScript ", percent: 70},
            {id:6, group: 1, value: "NodeJs ", percent: 60},
            {id:7, group: 2, value: "ReactJs ", percent: 70},

            {id:8, group: 3, value: "Excel ", percent: 70},
            {id:9, group: 3, value: "Word ", percent: 70},
            {id:10, group: 3, value: "VBA ", percent: 50},
            
        ];
        let ele = this.props;
        return(
            <div className="skillItemHeader col-md-4"  >
                <div className="heading text-center">
                        <h2>{ele.header}</h2>
                        <p>{ele.content}</p>
                 </div>
                 < SkillItemBody index={ele.id} listSkill={listSkill}/>

            </div>  
        )
    }
}
export default SkillHeader;