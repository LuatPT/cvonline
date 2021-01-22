import React from 'react';
import ItemFilter from './ItemFilter';
import ProjectsImageList from './ProjectsImageList';

class ProjectsBody extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            currentFilter : 0
        };
    }
    changeState = (value) =>{
        this.setState({currentFilter: value});
    }
    render(){
        // If in reality, use data from database
        const listFilter = [{id:0,value :"All"}, {id:1, value:"BackEnd"}, {id:2, value:"FrontEnd"}, {id:3, value:"University"}];
        return(
        <div className="projectsBody">
            <nav class="text-center">
                <ul className="row">
                    {listFilter.map(ele => <ItemFilter  changeState={this.changeState} valueFiter={ele.value}/>)}
                </ul>
            </nav>
            <ProjectsImageList currentState={this.state.currentFilter} />
        </div>  
        )
    }
}
export default ProjectsBody;