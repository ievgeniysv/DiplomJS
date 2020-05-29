import React from 'react';
import s from './Photo.scss';
import { NavLink } from 'react-router-dom';

export const Photo = ({id, likedByUser, likes, createdAt, user, url, userImg, toggleLikeOnPhotoHandler}) => {

  const likesHandler = (ev, like) => {
    toggleLikeOnPhotoHandler(ev.target.closest(`.${s.photoItem}`).id, like);
  }

  return (
    <>
      <div
        id={id}
        className={s.photoItem}>
        <NavLink to={`/profile/${user.username}/${id}`} className={s.imgLink}>
          <img
            src={url}
            alt=""
            className={s.photoItem__photo}
          />
        </NavLink>
        <div className={s.photoItem__authorContainer}>
          <a href="">
            <img
              className={s.photoItem__authorAvatar}
              src={userImg}
              alt=""/>
          </a>
          <a href="">
            <p className={s.photoItem__author}>{user.name}</p>
          </a>
        </div>
        <div className={s.photoItem__likesContainer}>
          <button
            onClick={(ev)=>{likesHandler(ev, likedByUser)}}
            className={
              likedByUser ?
                s.photoItem__likesBtnIfUserLike
                :
                s.photoItem__likesBtn}>
            <svg version="1.1" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
              <path
                d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"/>
            </svg>
          </button>
          <p className={s.photoItem__likesCount}>{likes}</p></div>
        <p className={s.photoItem__date}>{createdAt}</p>
      </div>
    </>
  );
};
