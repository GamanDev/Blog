import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../useFetchHook/useFetch';
import style from './Details.module.css';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);

  function handleDelete(e) {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => navigate('/'));
  }

  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blog && (
        <div className={style.details}>
          <article className={style.article}>
            <h2 clas>{blog.title}</h2>
            <p>Written by {blog.name}</p>
            <div className={style.article__text}>{blog.text}</div>
          </article>
          <button className={style.details__button_delete} onClick={handleDelete}>
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
};
export default Details;
