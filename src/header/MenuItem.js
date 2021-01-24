import React from 'react';

class MenuItem extends React.Component{
    changeMenuItem = () => {
        const {changeMenu} = this.props;
        const element = this.props;
        changeMenu(element.id);
    }
    render(){
        const {currentMenu} = this.props;
        const element = this.props;
        let stringUrl = '#'+element.value;
        return(
                <li className="" ><a href={stringUrl} className="scroll-link"  onClick={this.changeMenuItem} style={{color: element.id === currentMenu? "white": "#ffb89f"}}>{element.value}</a></li>
        )
    }
}
export default MenuItem;