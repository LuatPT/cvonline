import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StudenIcon from '../icons/StudentIcon';
import WorkIcon from '../icons/WorkIcon';

class ExperienceItem extends React.Component{
    render(){
        let ele = this.props;
        return(
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={ele.date}
            iconStyle={{ background: ele.group==="study" ? "rgb(245, 0, 87)" :'rgb(33, 150, 243)', color: '#fff' }}
            icon={ele.group==="study" ? <StudenIcon /> :<WorkIcon />}
            
            >
            <h3 className="vertical-timeline-element-title">{ele.company}</h3>
            <b className="vertical-timeline-element-subtitle">{ele.address}</b>
            <p style={{color: "red"}}>
           {ele.work}
            </p>
            <p>
           {ele.detail}
            </p>
            </VerticalTimelineElement>
        )
    }
}
export default ExperienceItem;