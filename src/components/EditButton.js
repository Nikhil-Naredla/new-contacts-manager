import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import EditForm from './EditForm'
import './utils/Modal.css'



const EditModal = ({contact})=>{
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
            <button className='btn btn-danger' onClick={()=>setIsOpen(!isOpen)}>Edit</button>
         {
             (isOpen ? (<div className='edit_modal'>
                <span class="edit_modal_close" onClick={()=>setIsOpen(false)}>&times;</span>
                    
                 <center>
                 <EditForm currentcontact = {contact}/>
                 </center>
                 </div>) : null)
         }
        </div>
    )
   
}

export default EditModal