import React from 'react';
import s from './RandomPhoto.scss';

export const RandomPhoto = ({}) => {

  return (
    <div className={`${s.photoOfTheDay} center`}>
      <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/17/foto.jpg"
           alt=""
           className={s.photoOfTheDay__img}/>
      <h1 className={s.photoOfTheDay__title}>MyUnsplashApp
        <span className={s.photoOfTheDay__text}>
          Unsplash is internet’s source of freely-usable images. Powered by creators everywhere.
        </span>
        <span className={s.photoOfTheDay__author}> Фото сделал Сережа</span>
      </h1>
    </div>
  );
};