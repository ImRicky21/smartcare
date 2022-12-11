/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getArticlesData } from '../../data/network-data';
import AppBar from '../components/app-bar';
import ArticleCard from '../components/article-card';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await getArticlesData();
      if (response.error) {
        Swal.fire({
          icon: 'error',
          title: 'Error dalam mengambil data',
          text: response.message,
        });
        return;
      }
      setArticles(response.data);
    }

    fetchArticles();
  }, []);

  return (
    <div className="main-content">
      <AppBar listActive="articles-page" />
      <div className="articles-container-section">
        {articles
          ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                tag={article.tag}
                image={article.image}
                short={article.short}
                title={article.title}
              />
            ))
          )
          : ''}
      </div>
    </div>
  );
}

export default ArticlesPage;
