/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function FeatureSection() {
  return (
    <section className="feature-section py-4 fs-4" id="feature-section">
      <h2 className="feature-heading fw-bold text-primary-dark text-center py-1">Fitur Yang Kami Sediakan</h2>
      <ul className="feature-content">
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/growth.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Monitoring Pertumbuhan</h3>
          <p className="feature-card__tag text-primary-dark">
            Pantau terus pertumbuhan anak
            dengan melihat perkembangan berat badan, tinggi badan
            dan juga lingkar kepala
          </p>
        </li>
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/develop.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Monitoring Perkembangan</h3>
          <p className="feature-card__tag text-primary-dark">
            Kami menyediakan solusi berupa stimulasi untuk meningkatkan
            perkembangan anak anda pada rentang umur yang ditentukan
          </p>
        </li>
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/article.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Artikel Parenting</h3>
          <p className="feature-card__tag text-primary-dark">
            Lihat Artikel terpercaya dari para ahli
            tentang kesehatan, gizi, dan seputar ilmu pola asuh yang baik
          </p>
        </li>
      </ul>
    </section>
  );
}
