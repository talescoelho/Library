import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="login-container">
      <h1 className="login-title">PLEASE SIGN IN</h1>

      <input placeholder="Email Address" className="login-input" />
      <input placeholder="Password" className="login-input" />

      <button className="login-button">NEXT</button>

      <p className="login-forgot">Forgot password?</p>

      <p className="login-join">
        Don't have account? <span className="join-span">Join Now</span>
      </p>
    </div>
  );
}

export default Home;
