import {
    ADDCONTACT,
    GETCONTACTS,
    ONCLICKLOGIN,
    ONUSERCHANGE,
    SETCURRENT,
   UPDATECURRENT,
   CURRENTLYLOGGEDIN,
   CLEARCURRENTLOGGEDIN,
   RECIEVEMESSAGEFUNCTION,
   SENTMESSAGEFUNCTION,
   GETRECIEVEMESSAGEFUNCTION,
   GETSENTMESSAGEFUNCTION
} from './types';
import axios from 'axios'

export const addContact = (contact1)=>{
    const headers = {
        'Content-Type': 'application/json'
      }
    return async(dispatch)=>{

        const res = await axios.post('http://localhost:1000/main/contact',contact1,{
           headers : headers
        })

        const contact =await res.data.contact


        dispatch({
            type : ADDCONTACT,
            payload : contact
        })
    }
}


export const getContacts = ()=>{

    return async(dispatch)=>{

        const res = await axios.get('http://localhost:1000/main/contact')
            
        const contact = await res.data.contact
        dispatch({
            type : GETCONTACTS,
            payload : contact
        })
    }
}

export const onClickLogin = (id)=>{

     return  {
            type : ONCLICKLOGIN,
            payload : id
            }
    
}
export const currentlyLoggedIn = (id)=>{
    return async(dispatch)=>{

        const res = await axios.get(`http://localhost:1000/main/contact/${id}`)
            
        const contact = await res.data.contact
        dispatch({
            type : CURRENTLYLOGGEDIN,
            payload : contact
        })
    }
}

export const onUserChange = (id)=>{

    return  {
           type : ONUSERCHANGE,
           payload : id
           }
   
}

export const onEditSetCurrent = (contact1)=>{
    console.log(contact1)
    console.log(contact1._id)


    const headers = {
        'Content-Type': 'application/json'
      }
    return async(dispatch)=>{

        const res = await axios.put(`http://localhost:1000/main/contact/${contact1._id}`,contact1,{
           headers : headers
        })

        const contact =await res.data.contact
        console.log(contact)


        dispatch({
            type : UPDATECURRENT,
            payload : contact
        })
    }
}

export const setcurrent = (contact)=>{
    return {
        type : SETCURRENT,
        payload : contact
    }
}

export const clearcurrentLoggedIn = ()=>{
    return {
        type : CLEARCURRENTLOGGEDIN
    }
   
}

export const recieveMessage = (message)=>{
    const headers = {
        'Content-Type': 'application/json'
      }
    return async(dispatch)=>{

        const res = await axios.put(`http://localhost:1000/main/contact/${message._id}`,message,{
           headers : headers
        })

        const contact =await res.data.contact
        console.log(contact)


        dispatch({
            type : RECIEVEMESSAGEFUNCTION,
            payload : contact
        })
    }
}

export const sentMessage = (message)=>{
    const headers = {
        'Content-Type': 'application/json'
      }
    return async(dispatch)=>{

        const res = await axios.put(`http://localhost:1000/main/contact/${message._id}`,message,{
           headers : headers
        })

        const contact =await res.data.contact
        console.log(contact)


        dispatch({
            type : SENTMESSAGEFUNCTION,
            payload : contact
        })
    }
}

export const getrecieveMessage = (messageId)=>{
   
    return async(dispatch)=>{

        const res = await axios.get(`http://localhost:1000/main/contact/${messageId}`)

        const contact =await res.data.contact
        console.log(contact)


        dispatch({
            type : GETRECIEVEMESSAGEFUNCTION,
            payload : contact
        })
    }
}

export const getsentMessage = (messageId)=>{

    return async(dispatch)=>{
       console.log(messageId);
        const res = await axios.get(`http://localhost:1000/main/contact/${messageId}`)

        const contact =await res.data.contact
        console.log(contact)


        dispatch({
            type : GETSENTMESSAGEFUNCTION,
            payload : contact
        })
    }
}

