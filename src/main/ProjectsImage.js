import React from 'react';

class ProjectsImage extends React.Component{
    render(){
        const ele = this.props;
        return(
          <div className="col-md-4 projectItem">
              <img src={ele.img} alt="error" className="projectImg" width="100%" height="100%"/>
              <div className="detailProject">
                <a href={ele.url}>
                    <h5>{ele.name}</h5>
                    <i className="fa fa-arrows-alt fa-2x"></i>
                </a>
              </div>
          </div>
        )
    }
}
export default ProjectsImage;