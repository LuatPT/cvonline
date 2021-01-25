import React from 'react';
import { ZoomerImage } from "react-zoomer-image";

class ProjectsImage extends React.Component{
    render(){
        const ele = this.props;
        let idImg = "awesome-image"+ ele.id;
        return(
            <div className="col-md-4 projectItemAll" >
                <div className="projectItem">
                    <div className="awesome-component">
                    <ZoomerImage
                    zoomId={idImg}
                    imgAlt="Awesome Image"
                    imgTitle="This is a really awesome image!"
                    imgSrc={ele.img}
                    />
                    </div>
                    <div className="divImgItem">
                        <div className="detailProject">
                            <span >
                                <h5>{ele.name}</h5>
                                <i className="fa fa-arrows-alt fa-2x"></i>
                            </span>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
export default ProjectsImage;