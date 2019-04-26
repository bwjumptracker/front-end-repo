import React from 'react';
import ReactDOM from 'react-dom';
// import withConditionalRender from './components/withConditionalRender';
// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';


// HOC ==> Returns an anon component, which gets set as the value of
// ToShow. Therefore ToShow is a component that we can render in the jsx
// const ToShow = withConditionalRender(FirstComponent)(SecondComponent);
// We pass in FirstComp and SecondComp because the HOC renders one of
// those components based on what's in localStorage

class Login extends React.Component {
  state = {
    inputText: '',
    userText:'',
    passText:'',

  };

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    // sets a "user" item to localStorage for our HOC to check and
    // render the correct component
    e.preventDefault();
    localStorage.setItem('user', this.state.inputText);
    window.location.reload();
  };

  render() {
    return (
      <>
      <div className="login">
        {/* Render the component (ToShow) that is created with our HOC */}
        {/* <ToShow /> */}
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <form>
          User name:<br/>
          <input 
            type="text" 
            value={this.state.userText}
            onChange={this.handleChanges}
            name="username"
          /><br/>
          User password:<br/>
          <input
            type="password"
            value={this.state.passText}
            onChange={this.handleChanges}
            name="psw"/>
        </form>
        
        <button onClick={this.signIn}>Login in</button>
      </div>
      <div>
        <label for="username">Username:</label>
        <input 
        type="text"
        id="username"
        name="username"
        />
      </div>
  
      <div>
        <label for="pass">Password (8 characters minimum):</label>
        <input 
        type="password" 
        id="pass" 
        name="password"
        minlength="8" required
        />
      </div>
  
      <input 
      type="submit"
      value="Sign in"
      />
      <form action="">
        Username: <input type="text" name="user"/><br/>
        Password: <input type="password" name="password"/>
      </form>
      </>


    );
  }
}
export default Login;





