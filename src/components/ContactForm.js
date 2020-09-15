import React, {useState } from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/contact.actions'

const ContactForm = ({addContact}) => {
    const [contact,setContact] = useState({
        name : '',
        email : '',
        phone : '',
        company : '',
        address  : '' 
    })


    const {name,email,phone,company,address} = contact
const onChange = (e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

const onSubmit = (e)=>{
    e.preventDefault()
    console.log(contact);
     addContact(contact)
     setContact({
        name : '',
        email : '',
        phone : '',
        company : '',
        address  : '' 
    })

}
    return (
        <div className='conatiner'>
            <form onSubmit={onSubmit} className="form-container" >
                <div className="form-group">
                <label >Full name</label>
                <input type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                <label >Email</label>
                <input type="text" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                <label >Phone</label>
                <input type="text" name="phone" value={phone} onChange={onChange}/>
                </div>
                <div className="form-group">
                <label >Company</label>
                <input type="text" name="company" value={company} onChange={onChange}/>
                </div>
                <div className='form-group'>
                <label >Address</label>
                <input type="text" name="address" value={address} onChange={onChange}/>
                </div>
                <button className='btn btn-danger' type='submit'  style={{marginLeft : 'auto',marginRight:'auto',marginBottom:'10px'}}>Add Contact</button>

            </form>
            
        </div>
    )
}


export default connect(null,{addContact})(ContactForm)
