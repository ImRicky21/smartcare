/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className="main-content">
      <div className="not-found-section card">
        <h1 className="not-found-section__heading">404</h1>
        <FaExclamationTriangle className="not-found-section__icon" />
        <p className="not-found-section__text">Halaman tidak ditemukan</p>
        <a className="not-found-section__link" href="/">kembali ke halaman utama</a>
      </div>
    </div>
  );
}
