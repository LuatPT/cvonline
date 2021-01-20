import React from 'react';

class IconList extends React.Component{
    render(){
        return(
            <div style={{fontSize: "50px"}} className="iconRef text-center">
               <a href="#">
                   <i className="fa fa-twitter fa-10x"></i>
               </a>
               <a href="#">
                   <i className="fa fa-facebook fa-10x"></i>
               </a>
               <a href="#">
                   <i className="fa fa-dribbble fa-10x"></i>
               </a>
               <a href="#">
                   <i className="fa fa-flickr fa-10x"></i>
               </a>
               <a href="#">
                   <i className="fa fa-github fa-10x"></i>
               </a>
            </div>
        )
    }
}
export default IconList;