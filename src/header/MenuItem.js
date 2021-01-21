import React from 'react';

class MenuItem extends React.Component{
    render(){
        const {value} = this.props;
        let stringUrl = '#'+value;
        return(
                <li className=""><a href={stringUrl} className="scroll-link">{value}</a></li>
        )
    }
}
export default MenuItem;