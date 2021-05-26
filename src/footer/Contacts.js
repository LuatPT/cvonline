import React from 'react';
import ContactItem from './ContactItem';
import IconList from './IconList';

class Contacts extends React.Component{
    render(){
        return(
            <div id="Contact Us" className="contactUs">
                <div className="heading text-center">
                    <h2>Let's Keep In Touch!</h2>
                    <p>Thank you for visiting out my profile. If you would like to get into contact with me, please contact with my information below.</p>
                </div>
                {/* <ContactItem /> */}
                <IconList />
                
            </div>
        )
    }
}
export default Contacts;