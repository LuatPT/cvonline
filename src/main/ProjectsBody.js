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
            {id:2, group: 1,name: "Work Manager website with Spring MVC", url:"https://github.com/LuatPT/WorkManager", img: "https://sathyanand.files.wordpress.com/2015/09/to-do-list1.jpg"},    
            {id:3, group: 1,name: "Supplement website with ReactJs, Redux and NodeJs BE", url:"https://github.com/LuatPT/WheyStore", img: "https://www.umon.vn/wp-content/uploads/2020/12/Wheystore.jpg"},
            {id:4, group: 1,name: "Face Recognition with React ,Redux BE", url:"https://github.com/LuatPT/FaceServer", img: "https://www.israel21c.org/wp-content/uploads/2020/04/shutterstock_731158624.jpg"},
            {id:5, group: 2,name: "Supplement website with ReactJs, Redux and NodeJs FE", url:"https://github.com/LuatPT/WheyStore_FE", img: "https://www.umon.vn/wp-content/uploads/2020/12/Wheystore.jpg"},
            {id:6, group: 2,name: "Face Recognition with React ,Redux FE", url:"https://github.com/LuatPT/FaceMe", img: "https://www.israel21c.org/wp-content/uploads/2020/04/shutterstock_731158624.jpg"},
            {id:7, group: 3,name: "English Vietnamese dictionary app with C #", url:"https://github.com/LuatPT/EN_VN_Dictionary", img: "https://y5study.com/wp-content/uploads/2020/05/8-tu-dien-online-tot-nhat-de-hoc-tieng-anh.png"},    
            {id:8, group: 3, name: "Weather forecast software with Android", url:"https://github.com/LuatPT/App_Weather", img: "https://user-images.githubusercontent.com/9766310/36504143-7796099e-178a-11e8-90df-5a1ed43a65b3.png"},    
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