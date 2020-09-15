import React,{useState,useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../utils/Dropdown.css'

import {onClickLogin,currentlyLoggedIn,clearcurrentLoggedIn} from '../../actions/contact.actions'

const Dropdown = ({contacts:{contacts,isAuthenicated},onClickLogin,currentlyLoggedIn,history,location,clearcurrentLoggedIn}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [username,setUsername] = useState('username')  
    // console.log(history)
    // console.log(location)
    useEffect(()=>{
        currentlyLoggedIn()
    },[currentlyLoggedIn])

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
    return (
        <div className='user' ref={clickOutSide}>
            <div className="username">
            {
                isAuthenicated ? <span>{username}</span> : <span>username</span> 
           }
            </div>
            <br/>
          <div className= 'dropdown_container' >
            {/* <button className='dropdown_header' onClick={()=>{setIsOpen(!isOpen)}}>Login</button> */}
            {!isAuthenicated ? (<button className='dropdown_header' style={{marginLeft:'10px'}} onClick={()=>{setIsOpen(!isOpen)}}>Login</button>) : (<button className='dropdown_header'  onClick={()=>{
                clearcurrentLoggedIn()
                  history.push('/')}}>Logout</button>)}
            <div className="dropdown_list_container">
                <div className="dropdown_list">
                {
               (isOpen ?(  <div className="dropdown_body">
               {
                   contacts.map((c)=>{
                       
                   return <div key={c._id} >
                       <span onClick={()=>{
                           onClickLogin(c._id)
                           currentlyLoggedIn(c._id)
                            setUsername(c.name)
                           }}>
                       {c.name}
                     </span>
                       </div>
                   })
               }
           </div>) : null)
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

export default connect(mapStateToProps,{onClickLogin,currentlyLoggedIn,clearcurrentLoggedIn})(withRouter(Dropdown))
