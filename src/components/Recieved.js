import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './Message.css'
import {currentlyLoggedIn,getrecieveMessage} from '../actions/contact.actions'
const Recieved = ({contacts : {getRecieved,currentLoggedIn},currentlyLoggedIn,getrecieveMessage}) => {

  useEffect(()=>{
    currentlyLoggedIn()
},[currentlyLoggedIn])

  useEffect(()=>{
 if(currentLoggedIn !== null){
  console.log(currentLoggedIn._id)
   getrecieveMessage(currentLoggedIn._id)

 }else{
   return
 }
  },[currentLoggedIn,getrecieveMessage])

  

  console.log(getRecieved)
  
    return (
          
      <div className='chat_container'>
        {/* {getRecieved.map((g)=>{
          return (<div>
                <h5>{g.from}</h5>  
          <p>{g.recieved}</p>
            </div>)
        })} */}

{getRecieved.length===0 ?(<h1>No Recieved messages</h1>):( getRecieved.map((g)=>{
          return (<div>
                <h5>{g.from}</h5>  
          <p>{g.recieved}</p>
            </div>)
        }))}
          
        </div>
    )
}

const mapStateToProps = (state)=>({
  contacts : state.contacts
})

export default connect(mapStateToProps,{currentlyLoggedIn,getrecieveMessage})(Recieved)


