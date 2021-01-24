import React from 'react';
import SkillItemBody from './SkillItemBody'
class SkillHeader extends React.Component{
    
    render(){
        let listSkill = [
            {id:1, group: 1, value: "HTML5 Skills", percent: 20},
            {id:2, group: 1, value: "CSS/CC3 Skills", percent: 50},
            {id:3, group: 1, value: "Java Skills", percent: 90},
            {id:4, group: 1, value: "JavaScript Skills", percent: 80},
            {id:5, group: 2, value: "NodeJs Skills", percent: 90},
            {id:6, group: 2, value: "ReactJs Skills", percent: 70},
            {id:7, group: 2, value: "VueJs Skills", percent: 40},
            {id:8, group: 2, value: "Spring Skills", percent: 20},
        ];
        let ele = this.props;
        return(
            <div className="skillItemHeader col-md-6"  >
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