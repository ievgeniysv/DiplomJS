import React from 'react';
import s from './RandomPhoto.scss';
import { MainPreloader } from '../Common/MainPreloader';

export const RandomPhoto = (props) => {
  const {urls, user} = props.randomPhoto;

  if(!(urls && user)){
     return (
      <div className={`${s.photoOfTheDay} center`}>
        <MainPreloader/>
      </div>
    )
  } else {
    // noinspection JSUnresolvedVariable
    return (
    <div className={`${s.photoOfTheDay} center`}>
      <img src={urls.regular}
           alt=""
           className={s.photoOfTheDay__img}/>
      <h1 className={s.photoOfTheDay__title}>MyUnsplashApp
        <span className={s.photoOfTheDay__text}>
          Unsplash is internet’s source of freely-usable images. Powered by creators everywhere.
        </span>
        <span className={s.photoOfTheDay__author}> Photo by {user.name}</span>
      </h1>
    </div>
  );
  }

};