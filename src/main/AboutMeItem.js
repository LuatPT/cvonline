import React from 'react';
import AboutMeItemBody from './AboutMeItemBody';
import AboutMeItemHeader from './AboutMeItemHeader';

class AboutMeItem extends React.Component{
    render(){
       const ele = this.props;
        return(
            <div className="col-md-4 boxer" >
                <AboutMeItemHeader valueHead={ele.header} iconHead={ele.css}/>
                <AboutMeItemBody valueBody={ele.body}/>
            </div>
        )
    }
}
export default AboutMeItem;