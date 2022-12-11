/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getArticleData } from '../../data/network-data';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';

function ArticleDetailPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [source, setSource] = useState('');
  const [creator, setCreator] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    async function fetchArticle() {
      const response = await getArticleData(id);
      if (response.error) {
        Swal.fire({
          icon: 'error',
          title: 'Error dalam mengambil data article',
          message: response.message,
        });
        return;
      }
      const { data } = response;
      setTitle(data.title);
      setImage(data.image);
      setSource(data.source);
      setTag(data.tag);
      setCreator(data.creator);
      document.querySelector('.article-page__content').innerHTML = data.content;
    }

    fetchArticle();
  }, []);

  return (
    <div className="main-content">
      <AppBar listActive="articles-page" />
      <BackButton linkTo="/articles" />
      <div className="article-page card">
        <img className="article-page__image" src={image} alt="gambar-article" />
        <div className="article-page__tag">{tag}</div>
        <div className="article-page__title">{title}</div>
        <div className="article-page__creator">{creator}</div>
        <div className="article-page__content" />
        <a className="article-page__source" href={source}>source</a>
      </div>
    </div>
  );
}

export default ArticleDetailPage;
