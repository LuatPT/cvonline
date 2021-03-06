import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

class Menu extends React.Component{
    render(){
        return(
            <header className="header" id="Home">
                <div id="#Menu">
                    <nav className="navbar navbar-inverse navBarMenu" role="navigation">
                        <LeftBar />
                        <RightBar />
                    </nav>
                </div>
            </header>
        )
    }
}
export default Menu;