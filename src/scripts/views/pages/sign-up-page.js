/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SignUpPage({ SignUpHandler }) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <form className="form-authentication">
      <h1 className="form-heading py-1">Sign Up</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="input-username-sign-up"
          placeholder="username"
          value={inputUsername}
          onChange={(event) => {
            setInputUsername(event.target.value);
          }}
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="input-email-sign-up"
          placeholder="email"
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="input-password-sign-up"
          placeholder="Password"
          value={inputPassword}
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-fluid"
        onClick={(event) => {
          SignUpHandler({
            event,
            username: inputUsername,
            email: inputEmail,
            password: inputPassword,
          });
        }}
      >
        Buat Akun
      </button>
      <Link to="/sign-in">
        Sudah memiliki akun?
      </Link>
    </form>
  );
}

SignUpPage.propTypes = {
  SignUpHandler: PropTypes.func.isRequired,
};

export default SignUpPage;
