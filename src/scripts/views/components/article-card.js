/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticleCard({
  id,
  image,
  tag,
  short,
  title,
}) {
  return (
    <div className="article-card">
      <Link className="artilce-card__wrapper" to={`/article/${id}`}>
        <img className="article-card__image" src={image} alt="gambar-article" />
        <div className="article-card__title">{title}</div>
        <div className="article-card__tag">{tag}</div>
        <div className="article-card__content">{short}</div>
      </Link>
    </div>
  );
}

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleCard;
