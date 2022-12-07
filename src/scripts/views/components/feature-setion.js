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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis nostrum saepe
            alias perspiciatis eius aliquid ipsum accusamus nam dicta omnis.

          </p>
        </li>
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/develop.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Monitoring Perkembangan</h3>
          <p className="feature-card__tag text-primary-dark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis nostrum saepe
            alias perspiciatis eius aliquid ipsum accusamus nam dicta omnis.

          </p>
        </li>
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/article.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Artikel Parenting</h3>
          <p className="feature-card__tag text-primary-dark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis nostrum saepe
            alias perspiciatis eius aliquid ipsum accusamus nam dicta omnis.

          </p>
        </li>
        <li className="feature-card d-flex flex-column align-items-center">
          <img className="feature-card__image" src={`${process.env.PUBLIC_URL}/features/schedule.svg`} alt="" />
          <h3 className="feature-card__heading text-primary-dark fw-bold">Jadwalkan Imunisasi</h3>
          <p className="feature-card__tag text-primary-dark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis nostrum saepe
            alias perspiciatis eius aliquid ipsum accusamus nam dicta omnis.
          </p>
        </li>
      </ul>
    </section>
  );
}
