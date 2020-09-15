import React, {  useState } from 'react'
import {connect} from 'react-redux'
import {onEditSetCurrent} from '../actions/contact.actions'
import { withRouter } from 'react-router-dom'


const EditForm = ({currentcontact,onEditSetCurrent,contacts:{contacts},history}) => {
  const newC =  contacts.find((c)=>{
       return c._id === currentcontact._id ? c : null
    })
    console.log(newC)
    const [contact,setContact] = useState({
        name : newC.name,
        email : newC.email,
        phone : newC.phone,
        company : newC.company,
        address  : newC.address,
        _id : newC._id      
    })


const {name,email,phone,company,address} = contact



const onChange = (e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

const onSubmit = (e)=>{
    e.preventDefault()
    console.log(contact._id);
    onEditSetCurrent(contact)
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
                <button className='btn btn-danger' type='submit'  style={{marginLeft : 'auto',marginRight:'auto',marginBottom:'10px'}}>Edit Contact</button>

            </form>
            
        </div>
    )
}
const mapStateToProps = (state)=>({
    contacts :state.contacts
})

export default connect(mapStateToProps,{onEditSetCurrent})(withRouter(EditForm))
