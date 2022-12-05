/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LocalStorage from '../data/local-storage';
import { login, register } from '../data/network-data';
import path from '../utils/path';
import Footer from './components/footer';
import NavBar from './components/navbar';
import TopBar from './components/top-bar';
import ArticlesPage from './pages/articles-page';
import DevelopMentPage from './pages/development-page';
import GrowthPage from './pages/growth-page';
import LandingPage from './pages/landing-page';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';
import VaccinesPage from './pages/vaccines-page';

export default function App() {
  const [authedUser, setAuthedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthedUser() {
      const user = await LocalStorage.getAccount('get-account');
      setAuthedUser(user);
    }
    getAuthedUser();
  }, []);

  const signOutHandler = async () => {
    await LocalStorage.deleteAccount('get-account');
    setAuthedUser('');
    navigate('/');
  };

  const signInHandler = async ({
    event, email, password,
  }) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    const response = await login(data);
    console.log(response);
    if (response.error) {
      alert('error');
      return;
    }
    const account = {
      key: 'get-account',
      ...response.data,
    };
    console.log(account);
    await LocalStorage.putAccount(account);
    alert('succes');
    setAuthedUser(account);
    navigate('/');
  };

  const signUpHandler = async ({
    event, username, email, password,
  }) => {
    event.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    const response = await register(data);
    if (response.error) {
      console.log(response);
      alert('error');
      return;
    }
    console.log(response);
    alert('succes');
    navigate('/sign-in');
  };

  const {
    root,
    signUp,
    signIn,
    depelopment,
    articles,
    vaccines,
  } = path;

  return (
    <>
      {authedUser
        ? (
          <>
            <TopBar username={authedUser.username} signOutHandler={signOutHandler} />
            <main>
              <Routes>
                <Route path={root} element={<GrowthPage userData={authedUser} />} />
                <Route path={depelopment} element={<DevelopMentPage />} />
                <Route path={articles} element={<ArticlesPage />} />
                <Route path={vaccines} element={<VaccinesPage />} />
              </Routes>
            </main>
          </>
        ) : (
          <>
            <NavBar />
            <main>
              <Routes>
                <Route path={root} element={<LandingPage />} />
                <Route path={signUp} element={<SignUpPage SignUpHandler={signUpHandler} />} />
                <Route path={signIn} element={<SignInPage SignInHandler={signInHandler} />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
    </>
  );
}
