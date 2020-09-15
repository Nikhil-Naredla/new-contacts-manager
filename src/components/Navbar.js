import React from 'react'
import Dropdown from './utils/Dropdown'
import Message from './Message'

const Navbar = () => {
    return (
        <div className='navbar' >
           contacts 
          
          
          <ul>
         <li> <Dropdown /></li>
         <li> <Message /></li>
          </ul>
           
              
        
        </div>
    )
}



export default Navbar
