import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceItem from './ExperienceItem';

class Experiences extends React.Component{
    render(){
        let listWork = [
            {id: 1,group:"study",date: "2013 - 2019", company: "Vinh University", address: "Vinh City, Nghe An", work: "Student", detail:"Study C/C++, Java, C#, Html/css"},
            {id: 2,group:"work",date: "10/2019 - 02/2020", company: "FPT Sofware", address: "Da Nang City", work: "Fresher", detail:"Train with Java and Struts Framework.Train with ReactJs and NodeJs"},
            {id: 3,group:"work",date: "03/2020 - 03/2021", company: "FPT Sofware", address: "Da Nang City", work: "Backend Developer", detail:"Work with Spring, VueJs (3 month).Coding Java with requirement from Japan"},
            {id: 4,group:"work",date: "03/2021 - NOW", company: "IFV Co. Ltd", address: "Da Nang City", work: "Backend Developer", detail:" Create Batch with Python, Coding Api with Java Spring "}
        ];

        return(
        <div className="experiences" id="Experience">
            <div className="heading text-center">
                <h2>Professional Experience</h2>
                <p>Below is my experiences in the past</p>
            </div>
            <VerticalTimeline >
                {listWork.map((ele,key) => <ExperienceItem key={key} {...ele}/>)}
            </VerticalTimeline>
        </div>  
        )
    }
}
export default Experiences;