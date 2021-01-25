import React from 'react';

class ItemFilter extends React.Component{

    changeStateItem = (e) =>{
        // e.preventDefault();
        const ele = this.props;
        const {changeState} = this.props;
        changeState(ele.id);
    }
    render(){
        const ele = this.props;
        const {currentFilter} = this.props;
        
        let mystyle ;
        if(currentFilter === ele.id){
            mystyle = {
          backgroundColor:  "#CC4646",
          color: "#f2f3ff"
          };
        }
        return(
            <li className="liFilter">
                <p className="current btnFilter btn-small" data-filter="*" onClick={this.changeStateItem} style={mystyle}><span>{ele.value}</span></p>
            </li>
        )
    }
}
export default ItemFilter;