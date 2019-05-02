import React, { Component } from 'react'
import axios from 'axios'

export default class Goals extends Component {
  constructor(props){
      super(props);
      this.state ={
          user: null,
      }
  };

  componentDidMount(){
        this.fetchUser(id);
  }

  fetchUser = id => {
    axios
        .get(/*user backend api */ `/${id}`)
        .then(response => {
            this.setState(() => ({ user: response.data }));
          })
          .catch(error => {
            console.error(error);
          });

  }
    render() {
        if (!this.state.user) {
            return <div>Loading user info...</div>;
          }

    const { goals, daysRemaining } = this.state.user;
    return (
      <div>
        <div>
          <h2>{goals}</h2>
          <div>
            Days Remaining: <strong>{daysRemaining}</strong>
          </div>
          
        </div>
        <div className="save-button">Save</div>
      </div>
    );
  }
}

