import React from 'react';
import s from './PhotoDetails.scss';
import { MainPreloader } from '../Common/MainPreloader';

export const PhotoDetails = (props) => {
  const {likes, description, location, urls, liked_by_user, id} = props.photo;
  const toggleLikeOnPhotoDetails = props.toggleLikeOnPhotoDetails;
  const likesHandler = (ev, like) => {
    toggleLikeOnPhotoDetails(ev.target.closest(`.${s.photo}`).id, like);
  }

  if (!urls) {
    return <MainPreloader/>
  } else {
    // noinspection JSUnresolvedVariable
    return (
      <div className={s.photo} id={id}>
        <div className={`${s.photoInfo} center`}>
          <div className={s.photolikes}>
            <button
              onClick={(ev)=>{likesHandler(ev, liked_by_user)}}
              title="Like photo"
              className={
                liked_by_user ?
                  s.photoLikeBtnLiked
                  :
                  s.photoLikeBtn
              }>
              <svg version="1.1" viewBox="0 0 32 32" width="22" height="22" aria-hidden="false">
                <path
                  d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"/>
              </svg>
            </button>
            <p className={s.photoAndLikesCount}>{likes}</p></div>
          {description ?
            <div className={s.photoDescription}>{description} </div>
            :
            ''
          }
          {location.city || location.country ?
            <div className={s.photoLocation}>{location.city} {location.country}</div>
            :
            ''}
        </div>
        <img
          className={'center'}
          src={urls.regular}
          alt="Photo"/>
      </div>
    );
  }

};