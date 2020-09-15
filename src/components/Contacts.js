import React, { useEffect } from 'react'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import '../components/Contacts.css'
import Modal from './utils/Modal'
import ContactInfo from './ContactInfo';
import { connect } from 'react-redux';
import {getContacts} from '../actions/contact.actions'
import {Route,Switch,Link} from 'react-router-dom'
import Sent from './Sent';
import Recieved from './Recieved';


const Contacts = ({contacts :{contacts,currentLoggedIn,currentContactsLoggedIn,isAuthenicated},getContacts }) => {

    useEffect(()=>{
       getContacts()
    },[getContacts])
    console.log(contacts);
    console.log(currentLoggedIn)
    const copiedContacts =[...contacts]
    return (
    <div className="contacts">

        <div className='search'>
          <div className = 'search_container'>
            <input type="text" placeholder='Search contacts'/>
             <SearchOutlined />
            </div>
          <Modal />
       </div>
        
        <div className='grid-2'>
            
        <div className= 'contact_table'>
            <table>
            <tr className='tr'>
            <th className="th1">
            <h5>Basic info</h5>
            </th>
            <th className="th2">
            <h5>Company</h5>
            </th>
            </tr>
            { copiedContacts.map((contact)=>{
                                return( <tr className='table_tr'>
                                 <td><h5><Link to={`/contact-info/${contact._id}`}>{contact.name}</Link></h5>
                                       <p>{contact.email}</p>
                                        </td>
                                     <td><p>{contact.company} </p></td>
                                 </tr>)
                            })   
             }
            </table>
        </div>
            
            
        
        <div className = 'contact_info_message_route'>
        
                <Switch>
                    <Route path='/contact-info/:id' exact render={(props)=>{
                       return <ContactInfo {...props} contacts={copiedContacts} />
                    }} />
                    <Route path = '/sent' exact component={Sent} />
                    <Route path = '/recieved' exact component={Recieved} />

                </Switch>
        
            </div>
            
        </div>

    </div>

       
    )
    
}
const mapStateToProps = (state)=>({
    contacts : state.contacts
})

export default  connect(mapStateToProps,{getContacts})(Contacts)
