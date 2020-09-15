import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import ContactForm from '../ContactForm'
import '../utils/Modal.css'


const Modal = ()=>{
  const [isOpen,setIsOpen] = useState(false)
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


    return(
        <div className='model_main' >
            <button className='btn btn-danger' onClick={()=>setIsOpen(!isOpen)}>Add Contact</button>
         {
             (isOpen ? (<div className='modal'>
                <span className="modal_close" onClick={()=>setIsOpen(false)}>&times;</span>
                    
                 <center className='form-holder'>
                 <ContactForm/>
                 </center>
                 </div>) : null)
         }
        </div>
    )
   
}

export default Modal