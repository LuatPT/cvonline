import React from 'react';

class ItemFilter extends React.Component{
    render(){
        const {valueFiter} = this.props;
        return(
            <li className="col-md-3">
                <a href="#" class="current btnFilter btn-small" data-filter="*">{valueFiter}</a>
            </li>
        )
    }
}
export default ItemFilter;