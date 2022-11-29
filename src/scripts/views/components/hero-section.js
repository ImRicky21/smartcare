/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img src="../public/hero/hero.svg" alt="" className="hero-image" />
      <div className="hero-content d-flex flex-column p-4">
        <h1 className="hero-content__heading text-center text-primary-dark py-1">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing
          elit.
          Repudiandae, autem.
        </h1>
        <button type="button" className="btn btn-primary">ayo mulai</button>
        <button type="button" className="btn btn-secondary">sudah punya akun?</button>
      </div>
    </section>
  );
}
