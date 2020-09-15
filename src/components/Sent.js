import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import './Message.css'
import {currentlyLoggedIn,getsentMessage} from '../actions/contact.actions'
const Sent = ({contacts : {getSent,currentLoggedIn},currentlyLoggedIn,getsentMessage}) => {

  useEffect(()=>{
    currentlyLoggedIn()
},[currentlyLoggedIn])

  useEffect(()=>{
 if(currentLoggedIn !== null){
  console.log(currentLoggedIn._id)
   getsentMessage(currentLoggedIn._id)

 }else{
   return
 }
  },[currentLoggedIn,getsentMessage])

  

  console.log(getSent.sent)
  
    return (
          
      <div className='chat_container'>
        {/* {getSent.map((g)=>{
          return (<div>
                <h5>{g.to}</h5>  
          <p>{g.sent}</p>
            </div>)
        })} */}

{getSent.length===0 ?(<h1>No sent messages</h1>):( getSent.map((g)=>{
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

export default connect(mapStateToProps,{currentlyLoggedIn,getsentMessage})(Sent)

