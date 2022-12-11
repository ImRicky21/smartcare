/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SignInPage({ SignInHandler }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <form className="form-authentication">
      <h1 className="form-heading py-1">Sign In</h1>
      <label className="label-field-auth">Email</label>
      <input
        type="email"
        className="input-field-auth"
        id="input-email-sign-up"
        placeholder="name@example.com"
        value={inputEmail}
        onChange={(event) => {
          setInputEmail(event.target.value);
        }}
      />
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
      <button
        type="submit"
        className="btn btn-secondary btn-fluid"
        onClick={(event) => SignInHandler({
          event,
          email: inputEmail,
          password: inputPassword,
        })}
      >
        Masukkan Akun
      </button>
      <Link to="/sign-up">
        Belum memiliki akun?
      </Link>
    </form>
  );
}

SignInPage.propTypes = {
  SignInHandler: PropTypes.func.isRequired,
};

export default SignInPage;
