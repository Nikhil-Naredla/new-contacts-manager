import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Contacts from './components/Contacts';


function App() {
  return (

    <Provider store={store}>
      <Router>
      <Navbar />
    <div className="App container">
     <Contacts />
   
    

    </div>
    </Router>
    </Provider>
  );
}

export default App;
