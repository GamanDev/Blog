import React, { useState } from 'react';
import style from './BlogList.module.css';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  console.log(blogs);
  return (
    <div>
      <h2>All BLogs</h2>
      {blogs.map((blog) => {
        return (
          <div className={style.blog}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
