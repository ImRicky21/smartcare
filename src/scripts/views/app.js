/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navbar';
import LandingPage from './pages/landing-page';
import SignUpPage from './pages/sign-up-page';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
