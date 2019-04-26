import React, { Component } from 'react';
import './App.css';
import LineChart from './LineChart';
import withAuthenticate from './Components/withAuthenticate'
import Login from './Components/Login'
import HomePage from './Components/HomePage'



const Authentication = withAuthenticate(HomePage)(Login);


class App extends Component {
  
  


  render() {
    return (
      <div className="App">
        <h1>Welcome to Vertical Jumper App</h1>
        {/* <Login/> */}
        {/* <HomePage/> */}
        <Authentication/>
     
      

      </div>
    );
  }
}
export default App;
