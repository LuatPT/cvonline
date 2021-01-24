import React from 'react';

class ContactItem extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6 ">
                    <h4>Address</h4>
                    Company <br/>
                    Ngu Hanh Son, Da Nang <br/>
                </div>
                <div className="col-md-6 ">
                    <h4>Phone and Email </h4> 
                    0982-***-***    <br/>
                    luatpham***@gmail.com    <br/>
                </div>
            </div>
        )
    }
}
export default ContactItem;