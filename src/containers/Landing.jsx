import React from 'react';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
  return (
    <div id="landing">
      <form id="login-form" method="GET" action="/auth/google">
        <button className="loginBtn" id="loginBtn" type="submit">
          Login with Google
        </button>
      </form>
      <form id="logout-form" method="GET" action="/auth/logout">
        <button className="loginBtn" id="loginBtn" type="submit">
          Logout
        </button>
      </form>
      <Button href="/fridge">Move to Fridge</Button>
    </div>
  );
};

export default Landing;
