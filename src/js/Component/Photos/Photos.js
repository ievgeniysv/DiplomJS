import React from 'react';
import { Photo } from './Photo/Photo';
import s from './Photos.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const Photos = (props) => {
  const photos = props.photos;
  const photoList = photos.map(p => {
    // noinspection JSUnresolvedVariable
    let date = new Date(p.created_at).toLocaleString('ru');
    date = date.split(',');
    // noinspection JSUnresolvedVariable
    return (
      <Photo
        key={p.id}
        id={p.id}
        likes={p.likes}
        likedByUser={p.liked_by_user}
        createdAt={date[0]}
        user={p.user}
        userImg={p.user.profile_image.small}
        url={p.urls.small}
        toggleLikeOnPhotoHandler={props.toggleLikeOnPhoto}
      />
    )
  })
  return (
    <div className={`${s.photoContainer} center`}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{320: 1, 450: 2, 768: 3}}
      >
        <Masonry
          gutter={10}
        >
          {photoList}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
};