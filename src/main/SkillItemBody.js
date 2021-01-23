import React from 'react';
import SkillItemValue from './SkillItemValue';

class SkillItemBody extends React.Component{
    
    render(){
       
        let {index,listSkill} = this.props;
        let arr = listSkill.filter(ele => ele.group === index);
        return(
        <div className="skillItemBody" >
            {
                arr.map((ele,key) => <SkillItemValue key={key} {...ele}/>)
            }
        </div>  
        )
    }
}
export default SkillItemBody;