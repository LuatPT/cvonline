import React from 'react';
import ProjectsBody from './ProjectsBody';
import ProjectsHeader from './ProjectsHeader';

class Projects extends React.Component{
    render(){
        
        return(
        <div className="projects" id="Projects">
            <ProjectsHeader />
            <ProjectsBody />
        </div>  
        )
    }
}
export default Projects;