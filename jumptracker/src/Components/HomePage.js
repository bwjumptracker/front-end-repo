import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LineChart from '../LineChart'





class HomePage extends Component {
  createFakeData(){
    // This function creates data that doesn't look entirely random
    const data = []
    for (let x = 0; x <= 30; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }
  
  render() {
    return (
      <div className="home-page">
        
        <h1>Vertical Jumper Graph</h1>
        <LineChart data={this.createFakeData()} />
        <h1>Goals You Set: </h1>
        <h1>EDIT GOAL </h1>
        <h1>DELTE GOAL </h1>
        
        
      </div>
    );
  }
}
export default HomePage;
