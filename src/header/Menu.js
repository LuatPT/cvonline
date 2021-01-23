import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

class Menu extends React.Component{
    render(){
        return(
            <header className="header">
                <div id="#Menu" className="container">
                    <nav className="navbar fixed-top navbar-inverse navBarMenu" role="navigation">
                        <LeftBar />
                        <RightBar />
                    </nav>
                </div>
            </header>
        )
    }
}
export default Menu;