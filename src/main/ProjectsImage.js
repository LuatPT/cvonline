import React from 'react';

class ProjectsImage extends React.Component{
    render(){
        const ele = this.props;
        return(
          <div className="col-md-4">
              <img src={ele.img} alt="error" width="400px" height="400px"/>
              <h4>{ele.name}</h4>
              <p>{ele.url}</p>
          </div>
        )
    }
}
export default ProjectsImage;