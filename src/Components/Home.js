import React, { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
