import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {    
    render() {         
        const {name,email,phone} = this.props.Contact;        
        return (
            <div className="card card-body mb-3">
                <h4>{name}</h4>  
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">
                        Phone: {phone}
                    </li>
                </ul>
            </div>
        )
    }
};
Contact.defaultProps = {
    name: 'jjj',
    email: 'j@g.com',
    phone:'099999999'
};

Contact.propTypes = {
            
    Contact: PropTypes.object.isRequired

}; 

export default Contact;
