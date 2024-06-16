import React from 'react';

import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

const ImagePage = ({params}) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <p>/[slug]/image/default</p>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;