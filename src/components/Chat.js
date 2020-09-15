import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import './utils/Modal.css'
import {connect} from 'react-redux'
import {currentlyLoggedIn,recieveMessage,sentMessage} from   '../actions/contact.actions'




const ChatModal = ({contact,contacts:{contacts,currentLoggedIn,isAuthenicated},currentlyLoggedIn,recieveMessage,sentMessage})=>{
    const newC =  contacts.find((c)=>{
        return c._id === contact._id ? c : null
     })
    useEffect(()=>{
        currentlyLoggedIn()
    },[currentlyLoggedIn])

    useEffect(()=>{
        if(currentLoggedIn !== null){
            setMessage({
                title : "",
                sent : null,
               recieved :null,
                _id : newC._id,
                 from : currentLoggedIn.name,
                  to : null
            })
        }
             else{
                setMessage({
                    title : "",
                    sent : null,
                   recieved :null,
                    _id : newC._id,
                     from : '',
                      to : null
                })

            }
        },[currentLoggedIn,newC._id])
   
    console.log(currentLoggedIn)

   
     console.log(newC._id)
  const [isOpen,setIsOpen] = useState(false)
  const  [message,setMessage] = useState({title : "",
  sent : null,
  recieved :null,
  _id : newC._id,
  from : '',
  to : null})    
  useEffect(()=>{
    if(currentLoggedIn !== null){
        console.log(currentLoggedIn._id)
        setOwn({
           
            sent : null,
            to :newC.name,
            _id : currentLoggedIn._id,
             
        })
    }
         else{
            setMessage({
               
                sent : null,
                
               
                
            })

        }
    },[currentLoggedIn])
  const [own,setOwn] = useState()



   
  



//   const clickOutSide = useRef();


//   const handleClickOutSide = (e)=>{
//       if(clickOutSide.current.contains(e.target)){
//           return
//       }
     
//           setIsOpen(false)
      
//   }


//   const getTheOutSideClick = ()=>{
//     return  document.addEventListener('click',handleClickOutSide)

// }


// useEffect(()=>{
// getTheOutSideClick()

  

// },[getTheOutSideClick])

const onChange = (e)=>{
    setMessage({...message,recieved : e.target.value})
    setOwn({...own,sent : e.target.value})
}

const onSubmit = (e)=>{
e.preventDefault()
console.log(message);
console.log(own)
recieveMessage(message)
sentMessage(own)
  
}
    return(
        <div className='model_main' >
            <button className='btn btn-danger' onClick={()=>setIsOpen(!isOpen)}>Chat</button>
         {
             (isOpen ? (<div className='edit_modal'>
                <span class="edit_modal_close" onClick={()=>setIsOpen(false)}>&times;</span>
                    
                 <center>
                 <form onSubmit={onSubmit} className='form-container'>
                     <div className='form-group'>
                     <label>send message</label>
                 <textarea name="message" placeholder="type some message..." onChange={onChange}></textarea>
                     </div>
                 <button className = "btn btn-danger">send</button></form>
                 </center>
                 </div>) : null)
         }
        </div>
    )
   
}

const mapStateToProps = (state)=>({
    contacts :state.contacts
})

export default connect(mapStateToProps,{currentlyLoggedIn,recieveMessage,sentMessage})(ChatModal)