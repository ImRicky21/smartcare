/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthenticationIdb from '../data/local-storage';
import { login } from '../data/network-data';
import path from '../utils/path';
import Footer from './components/footer';
import NavBar from './components/navbar';
import HomePage from './pages/home-page';
import LandingPage from './pages/landing-page';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';

const { root, signUp, signIn } = path;

export default function App() {
  const [authedUser, setAuthedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthedUser() {
      const user = await AuthenticationIdb.getAccount('get-account');
      setAuthedUser(user);
    }
    getAuthedUser();
  }, []);

  const signOutHandler = async () => {
    await AuthenticationIdb.deleteAccount('get-account');
    setAuthedUser('');
    navigate('/');
  };

  const signInHandler = async (event, email, password) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    const response = await login(data);
    if (response.error) {
      alert('error');
    }
    const account = {
      key: 'get-account',
      ...response.data,
    };
    await AuthenticationIdb.putAccount(account);
    alert('succes');
    setAuthedUser(account.email);
    navigate('/');
  };

  return (
    <>
      <main>
        {authedUser
          ? (
            <>
              <NavBar SignOutButton SignOutHandler={signOutHandler} />
              <HomePage email={authedUser.email} />
            </>
          ) : (
            <>
              <NavBar SignOutButton={false} SignOutHandler={signOutHandler} />
              <Routes>
                <Route path={root} element={<LandingPage />} />
                <Route path={signUp} element={<SignUpPage />} />
                <Route path={signIn} element={<SignInPage SignInHandler={signInHandler} />} />
              </Routes>
            </>
          )}
      </main>
      <Footer />
    </>
  );
}
