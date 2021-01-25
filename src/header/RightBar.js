import React from 'react';
import MenuItem from './MenuItem';

class RightBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentMenu: 0
        }
    }
    changeMenu = (value) =>{
        this.setState({
            currentMenu: value
        })
    }
    render(){
        let list = [{id:0, value:"Home"}, {id:1, value:"About Me"}, {id:2, value:"Skills"}, {id:3, value:"Experience"}, {id:4, value:"Projects"}, {id:5, value:"Contact Us"}];
        return(
            <div id="main-nav">
                <ul className="nav navbar-nav row"  id="mainNav">
                {
                list.map((element,key) => <MenuItem key={key} currentMenu={this.state.currentMenu} changeMenu={this.changeMenu} {...element} /> )
                }
                </ul>
            </div>
        )
        
    }
}
export default RightBar;