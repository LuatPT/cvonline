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
        let listFilter = [{id:0,value :"All"}, {id:1, value:"BackEnd"}, {id:2, value:"FrontEnd"}, {id:3, value:"University"}];
        let listProjects = [
            {id:1, group: 1, name: "Rest API with Spring Boot", url:"https://github.com/LuatPT/api", img: "https://www.seobility.net/en/wiki/images/f/f1/Rest-API.png"},  
            {id:2, group: 1,name: "Work Manager website with Spring MVC", url:"https://github.com/LuatPT/WorkManager", img: "https://lh3.googleusercontent.com/Yao-TQedpE2m2Rpaa6nW0svJ1WAmgbrjyvGz-ZdJ1-vvquJfUBJ2BPp4M11NOy2TbJeJtRyP9bRLa5t6KewlHhxg=w640-h400-e365-rj-sc0x00ffffff"},    
            {id:3, group: 1,name: "Supplement website with ReactJs, Redux, NodeJs BE", url:"https://github.com/LuatPT/WheyStore", img: "https://i.imgur.com/tOumlZV.png"},
            {id:4, group: 1,name: "Face Recognition with React ,Redux BE", url:"https://github.com/LuatPT/FaceServer", img: "http://i.imgflip.com/4v3e4k.gif"},
            {id:5, group: 2,name: "Supplement website with ReactJs, Redux and NodeJs FE", url:"https://github.com/LuatPT/WheyStore_FE", img: "https://i.imgur.com/tOumlZV.png"},
            {id:6, group: 2,name: "Face Recognition with React ,Redux FE", url:"https://github.com/LuatPT/FaceMe", img: "http://i.imgflip.com/4v3e4k.gif"},
            {id:7, group: 3,name: "Eng-VN dictionary app with C#", url:"https://github.com/LuatPT/EN_VN_Dictionary", img: "https://i.imgur.com/U8UAYNP.png"},    
            {id:8, group: 3, name: "Weather forecast software with Android", url: "https://github.com/LuatPT/App_Weather",img:"https://i.imgur.com/rEnYX19.png"},    
    ]
        if(this.state.currentFilter !== 0){
            listProjects = listProjects.filter(ele => ele.group === this.state.currentFilter);
         }
        return(
        <div className="projectsBody">
            <nav className="text-center navFilter">
                <ul className="row ulFilter">
                    {listFilter.map((ele, index) => <ItemFilter key={index} currentFilter={this.state.currentFilter} changeState={this.changeState} {...ele}/>)}
                </ul>
            </nav>
            <ProjectsImageList currentState={this.state.currentFilter} listProjects={listProjects} />
        </div>  
        )
    }
}
export default ProjectsBody;