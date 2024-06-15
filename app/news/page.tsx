import React from 'react';
import Link from "next/link";
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from "../../components/news-list";

const NewsListPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsListPage;