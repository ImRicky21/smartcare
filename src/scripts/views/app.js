/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import LandingPage from './pages/landing-page';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}
