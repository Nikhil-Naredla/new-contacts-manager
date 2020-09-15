import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getContacts} from '../actions/contact.actions'
import axios from 'axios'
import EditModal from './EditButton'
import ChatModal from './Chat'
import './Contacts.css'


const ContactInfo = ({contacts:{contacts,isAuthenicated, currentContactsLoggedIn},match,getContacts}) => {
    useEffect(()=>{
     getContacts()
    },[getContacts])

    const id = match.params.id
    console.log(id)
  return(   
  <div>
       
        {contacts.map((c)=>{
            
             return   c._id === id ? (<div className='contact-info text-center' key={c._id}>
                       
                       <h3>{c.name}</h3>
                       < p>Product manger</p>
                       <ul>
                           <li>Full name : <h5>{c.name}</h5></li>
                           <li>Email     : <h5>{c.email}</h5></li>
                           <li>Phone     : <h5>{c.phone}</h5></li>
                           <li>Company   : <h5>{c.company}</h5></li>
                           <li>Address   : <h5>{c.address}</h5></li>
                       </ul>
                   
                  {/* <div className="bottom_buttons">
                 
                   <EditModal contact ={c} />
                       
                    
                      <ChatModal contact ={c}  />
                    
                  </div> */}

                  {isAuthenicated && <div className="bottom_buttons">
                 
                 <EditModal contact ={c} />
                     
                  
                    <ChatModal contact ={c}  />
                  
                </div>}
             </div>
             
             ) : []
                
            
        })} 


 
    
       
    </div>
  )

}
const mapStateToProps = (state)=>({
    contacts : state.contacts
})

export default connect(mapStateToProps,{getContacts})(ContactInfo)
