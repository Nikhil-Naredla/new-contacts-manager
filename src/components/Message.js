import React, { useEffect, useRef, useState } from 'react'
import {withRouter,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './utils/Dropdown.css'

const Message = ({contacts:{isAuthenicated}}) => {
    const [isOpen,setIsOpen] = useState(false)
    
    

    const clickOutSide = useRef();


  const handleClickOutSide = (e)=>{
      if(clickOutSide.current.contains(e.target)){
          return
      }
     
          setIsOpen(false)
      
  }
  const getTheOutSideClick = ()=>{
      return  document.addEventListener('click',handleClickOutSide)

  }


  useEffect(()=>{
 getTheOutSideClick()

    

 },[getTheOutSideClick])

 const selectItems = ['sent','recieved']
    return (
       <div ref={clickOutSide}>
            <div className= 'dropdown_container' >
            {/* <button className='dropdown_header' onClick={()=>{setIsOpen(!isOpen)}}>messages</button> */}
            {isAuthenicated && (<button className='dropdown_header' onClick={()=>setIsOpen(!isOpen)}>messages</button>)}
            <div className="dropdown_list_container">
                <div className="dropdown_list">
                {
                    isOpen ? (<div className="dropdown_body"> 
                         
                         <div>
                             
                                 <li><Link to='/sent' style={{color:'black'}}>sent</Link></li>
                                 <li><Link to='/recieved' style={{color:'black'}}>recieved</Link></li>

                            
                         </div>
                    
                    </div>) : null
                }
               </div>
           </div>
           </div>
       </div>
    )
}
const mapStateToProps = (state)=>({
    contacts : state.contacts      
})

export default connect(mapStateToProps) (withRouter(Message))
