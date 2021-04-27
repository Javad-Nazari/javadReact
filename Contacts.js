import React, { Component } from 'react'
import Contact from './Contact.js'
class Contacts extends Component {
    state = {
            contacts: [
                {
                    id: 1,
                    name : 'Javad Nazari',
                    email : "Sattiorg@gmail.com",
                    phone : "0912-0659856"
                },
                {
                    id: 2,
                    name:'Khatereh Nikoei',
                    email:"Kh.Nikoeizad@gmail.com",
                    phone:"0912-0000000"
                },
                {
                    id: 3,
                    name:'Shima PouyanRad',
                    email:"Shima@gmail.com",
                    phone:"0912-111111"
                }

            ]
        }        
    render() {
        const x  = this.state.contacts;
        return (
            <div>
                {
                    x.map(con => (
                    <Contact key={con.id} Contact={con}/>
                    ))
                }                
            </div>
        )
    }
}
export default Contacts;