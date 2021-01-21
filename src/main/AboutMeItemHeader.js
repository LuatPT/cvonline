import React from 'react';

class AboutMeItemHeader extends React.Component{
    render(){
        const {valueHead,iconHead} = this.props;
        return(
            <div className="aboutItemHeader">
                <i className={iconHead}></i>
                <h3>{valueHead}</h3>
            </div>
        )
    }
}
export default AboutMeItemHeader;