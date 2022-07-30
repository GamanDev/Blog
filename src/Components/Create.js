import React, { useState } from 'react';
import style from './Create.module.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, name, text };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    });
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={style.form__label}>
        Name
      </label>
      <input type="text" className={style.form__inputs} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="title" className={style.form__label}>
        Title
      </label>
      <input
        type="text"
        className={style.form__inputs}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="text" className={style.form__label}>
        Text
      </label>
      <textarea className={style.form__inputs} onChange={(e) => setText(e.target.value)}></textarea>

      {!isPending ? (
        <button className={style.form__button__submit}>Submit</button>
      ) : (
        <button disabled className={style.form__button__submit}>
          Submit
        </button>
      )}
    </form>
  );
};

export default Create;
