import React from 'react';
import { ZoomerImage } from "react-zoomer-image";

class ProjectsImage extends React.Component{
    render(){
        const ele = this.props;
        let idImg = "awesome-image"+ ele.id;
        return(
            <div className="col-md-4 projectItemAll" >
                <div className="projectItem">
                    <a href={ele.url}>
                        <span className="divImgItemSpan">
                            <h5>{ele.name}</h5>
                        </span>
                    </a>
                    <div className="awesome-component">
                        <ZoomerImage
                        zoomId={idImg}
                        imgAlt="Awesome Image"
                        imgTitle={ele.name}
                        imgSrc={ele.img}
                        />
                    </div>
                </div>
          </div>
        )
    }
}
export default ProjectsImage;