import React from 'react';


import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';
import Home from './components/HomePage/HomePage.js';

function App() {
  return (
    <div className="App">
      {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <Home/>
      }
    </div>
  );
}

export default App;