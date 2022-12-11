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
      <label className="label-field-auth">Username</label>
      <input
        type="text"
        className="input-field-auth"
        id="input-username-sign-up"
        placeholder="username"
        value={inputUsername}
        onChange={(event) => {
          setInputUsername(event.target.value);
        }}
      />
      <label className="label-field-auth">Email</label>
      <input
        type="email"
        className="input-field-auth"
        id="input-email-sign-up"
        placeholder="email"
        value={inputEmail}
        onChange={(event) => {
          setInputEmail(event.target.value);
        }}
      />
      <label htmlFor="floatingInput">Email address</label>
      <label className="label-field-auth">Password</label>
      <input
        type="password"
        className="input-field-auth"
        id="input-password-sign-up"
        placeholder="Password"
        value={inputPassword}
        onChange={(event) => {
          setInputPassword(event.target.value);
        }}
      />
      <label htmlFor="floatingPassword">Password</label>
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
