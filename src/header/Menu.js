import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

class Menu extends React.Component{
    render(){
        return(
            <div id="#Menu">
                <LeftBar />
                <RightBar />
            </div>
        )
    }
}
export default Menu;