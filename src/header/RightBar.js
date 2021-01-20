import React from 'react';
import MenuItem from './MenuItem';

class RightBar extends React.Component{
    render(){
        let list = ["Home", "About Us", "Skills", "Experience", "Projects", "Contact Us"];
        return(
            <div id="main-nav" className="">
                <ul className="nav navbar-nav"  id="mainNav">
                {
                list.map(element => <MenuItem value={element}/> )
                }
                </ul>
            </div>
        )
        
    }
}
export default RightBar;