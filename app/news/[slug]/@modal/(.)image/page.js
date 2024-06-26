'use client';

import React from 'react';

import {notFound, useRouter} from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

const InterceptedImagePage = ({params}) => {
  const router = useRouter()

  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <p>/[slug]/@modal/image/default</p>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;