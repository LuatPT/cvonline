import React from 'react';
import MenuItem from './MenuItem';

class RightBar extends React.Component{
    render(){
        let list = ["Home", "About Me", "Skills", "Experience", "Projects", "Contact Us"];
        return(
            <div id="main-nav">
                <ul className="nav navbar-nav row"  id="mainNav">
                {
                list.map(element => <MenuItem value={element}/> )
                }
                </ul>
            </div>
        )
        
    }
}
export default RightBar;