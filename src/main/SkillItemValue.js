import React from 'react';

class SkillItemValue extends React.Component{
    
    render(){
        let ele = this.props;
        return(
        <div className="skillItemValue row" >
             <p className="col-md-4">{ele.value}</p>
             <div className="progress col-md-8">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:ele.percent+"%"}}>
                        <span className="sr-only"></span>
                </div>
              </div>
        </div>  
        )
    }
}
export default SkillItemValue;