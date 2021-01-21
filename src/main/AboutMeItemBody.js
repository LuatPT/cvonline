import React from 'react';

class AboutMeItemBody extends React.Component{
    render(){
        const {valueBody} = this.props;
        return(
            <div className="aboutItemBody">
                <p>{valueBody}</p>
            </div>
        )
    }
}
export default AboutMeItemBody;