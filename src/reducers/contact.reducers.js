import {
    ADDCONTACT,
    GETCONTACTS,
    ONCLICKLOGIN,
    ONUSERCHANGE,
    SETCURRENT,
   CLEARCURRENT,
   UPDATECURRENT,
   CURRENTLYLOGGEDIN,
   CLEARCURRENTLOGGEDIN,
   RECIEVEMESSAGEFUNCTION,
   SENTMESSAGEFUNCTION,
   GETRECIEVEMESSAGEFUNCTION,
   GETSENTMESSAGEFUNCTION
} from '../actions/types';

const initialState = {
    contacts :[],
    currentContactsLoggedIn :[],
    isAuthenicated : false,
    currentLoggedIn : null,
    recieved :[],
    sent : [],
    getRecieved :[],
    getSent : [] 

}

export default (state = initialState,action)=>{
    switch(action.type){

    case ADDCONTACT :
            console.log(state)
            console.log(action.payload)
             return{
            ...state,
            contacts : [...state.contacts, action.payload]
        };
        case GETCONTACTS : return{
            ...state,
            contacts : action.payload
        };
        case CURRENTLYLOGGEDIN :console.log(action.payload )
        console.log('hiiii')
            return{
            ...state,
            currentLoggedIn : action.payload
        }
        case ONCLICKLOGIN : return{
            ...state,
                contacts : [...state.contacts.slice().filter(
                contact => contact._id !== action.payload
              )],
              isAuthenicated : true
        };
        case ONUSERCHANGE : return{
            ...state,
            contacts : state.contacts.map((c)=>c._id === action.payload ? c : []),
            isAuthenicated : true

        }
        case SETCURRENT :
            console.log(state)
            console.log(action.payload)
             return{
            ...state,
            current : action.payload
        };
        case CLEARCURRENT :
            return{
                ...state,
                current : null
            }

        case UPDATECURRENT :return{
                ...state,
                
            contacts :[...state.contacts,action.payload]
      
    }
   
    case CLEARCURRENTLOGGEDIN : return{
        ...state,
        isAuthenicated : false,
        currentLoggedIn : null,
        // contacts : [action.payload]
    }
    case RECIEVEMESSAGEFUNCTION : return{
        ...state,
        isAuthenicated : true,
        recieved : action.payload
    }
    case SENTMESSAGEFUNCTION : return{
        ...state,
        isAuthenicated : true,
        sent : action.payload
    }
    case GETSENTMESSAGEFUNCTION : return{
        ...state,
        isAuthenicated : true,
        getSent : [action.payload]
    }
    case  GETRECIEVEMESSAGEFUNCTION : return{
        ...state,
        isAuthenicated : true,
        getRecieved : [action.payload]
    }

        default : return state
    }
}