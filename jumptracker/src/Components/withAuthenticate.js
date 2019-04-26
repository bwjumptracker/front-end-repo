import React from 'react';

// This is our HOC! It takes in two components and returns an anon component
const withAuthenticate = HPage => SecondComponentAKALOGIN => props => {
  // We can pass props to <ToShow /> if we want, and we would have access
  // to those props here

  // Now, this HOC will check to see if there is a "user" item in localStorage
  if (localStorage.getItem('user')) {
    // If there is a "user" item in localStorage, render <FirstComponent />
    return <HPage />;
  }
  // If there is NOT a "user" item in localStorage, render <SecondComponent />
  return <SecondComponentAKALOGIN />;
};

export default withAuthenticate;
