import React from 'react';

import '../css/Register.css';

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-title">REGISTER</h1>

      <div className="register-form-1">
        <input className="register-input" placeholder="Name" />
        <input className="register-input" placeholder="Last Name" />
      </div>

      <input className="register-input-1" placeholder="Email" />
      <input className="register-input-1" placeholder="CPF" />
      <input className="register-input-1" placeholder="Birth Year" />
    </div>
  );
}

export default Register;
