import React from 'react';
import ProjectsImage from './ProjectsImage';

class ProjectsImageList extends React.Component{
    
    render(){
        let {listProjects} = this.props;
        
        return(
        <div className="projectsImageList row" >
            {
                listProjects.map((ele,key) => <ProjectsImage key={key} {...ele}/> )
            }
        </div>  
        )
    }
}
export default ProjectsImageList;