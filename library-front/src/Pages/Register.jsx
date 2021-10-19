import React from 'react';

import { Link } from 'react-router-dom';
import returnArrow from '../images/return-arrow.svg';

import '../css/Register.css';

function Register() {
  return (
    <div className="register-container">
      <header className="register-header">
        <Link to="/">
          <img className="register-return" src={returnArrow} alt="return" />
        </Link>
      </header>

      <h1 className="register-title">REGISTER</h1>

      <div className="register-form">
        <label className="register-label">
          First Name *
          <input className="register-input" placeholder="First Name" required />
        </label>

        <label className="register-label">
          Last Name *
          <input className="register-input" placeholder="Last Name" required />
        </label>

        <label className="register-label">
          Email *
          <input className="register-input" placeholder="Email" required />
        </label>

        <label className="register-label">
          Password *
          <input className="register-input" placeholder="Password" required />
        </label>

        <label className="register-label">
          CPF *
          <input className="register-input" placeholder="CPF" required />
        </label>

        <label className="register-label">
          Birth Year *
          <input className="register-input" placeholder="Birth Year" required />
        </label>
      </div>

      <div className="register-form">
        <label className="register-label">
          Postal Code *
          <input
            className="register-input"
            placeholder="Postal Code"
            required
          />
        </label>

        <label className="register-label">
          State *
          <input className="register-input" placeholder="State" required />
        </label>

        <label className="register-label">
          City *
          <input className="register-input" placeholder="City" required />
        </label>

        <label className="register-label">
          District *
          <input className="register-input" placeholder="District" required />
        </label>

        <label className="register-label">
          Address *
          <input className="register-input" placeholder="Address" required />
        </label>

        <label className="register-label">
          Phone *
          <input className="register-input" placeholder="Phone" required />
        </label>

        <label className="register-label">
          Telephone
          <input className="register-input" placeholder="Telephone" />
        </label>

        <label>
          <input type="checkbox" /> I accept the terms and conditions
        </label>
      </div>

      <button className="register-button">Register</button>
    </div>
  );
}

export default Register;
