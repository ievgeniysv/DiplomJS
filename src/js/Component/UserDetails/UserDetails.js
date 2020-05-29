import React from 'react';
import s from './UserDetails.scss';

export const UserDetails = (props) => {
  const {name, location, bio, total_photos, total_likes, total_collections, profile_image} = props.user
  // noinspection JSUnresolvedVariable
  return (
    <div>
      <div className={`${s.userInfo} center`}>
        <img
          src={
            profile_image ?
            profile_image.medium
            :
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq&usqp=CAU"
          }
          alt=""
          className={s.userInfo__avatar}
        />
        <div className={`${s.userInfo__nameAndInfo}`}>
          <p className={s.userInfo__name}>
            {name}
          </p>
          <p className={s.userInfo__location}>
            {location}
          </p>
          <p className={s.userInfo__bio}>
            {bio}
          </p>
          <div className={s.photosAndLikesCount}>
            <p>Photos
              <span className={s.count}>{total_photos}</span>
            </p>
            <p>Likes<span className={s.count}>{total_likes}</span></p>
            <p>Collections<span className={s.count}>{total_collections}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};