/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img src={`${process.env.PUBLIC_URL}/hero/hero.svg`} alt="" className="hero-image" />
      <div className="hero-content d-flex flex-column p-4">
        <h1 className="hero-content__heading text-center text-primary-dark py-1">
          Pantau dengan mudah Tumbuh Kembang Si kecil
        </h1>
        <button type="button" id="button-sign-in" className="btn btn-primary">
          <Link to="/sign-up">
            ayo mulai
          </Link>
        </button>
        <button type="button" id="button-sign-up" className="btn btn-secondary">
          <Link to="/sign-in">
            sudah punya akun?
          </Link>
        </button>
      </div>
    </section>
  );
}
