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
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="input-email-sign-up"
          placeholder="name@example.com"
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
