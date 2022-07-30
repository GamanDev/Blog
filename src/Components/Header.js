import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.header__h1}>Bliminse Blog</h1>
      <Link to="/">
        <h2 className={style.header__h2}>Home</h2>
      </Link>
      <Link to="/create">
        <h2 className={`${style.header__h2} ${style.header__h2_cyan}`}>New Blog</h2>
      </Link>
    </div>
  );
};

export default Header;
