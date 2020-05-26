import React from 'react';
import s from './UserProfile.scss';

export const UserProfile = (props) => {
  return (
    <div className={s.userHeader}>
      <img
        src=""
        alt=""
        className={s.userHeader__avatar}
      />
      <div className={`${s.userHeader__info} ${s.userInfo}`}>
        <p className={s.userInfo__name}>
          Соклов Евгений
        </p>
        <p className={s.userInfo__location}>
          Россия Екатеринбург
        </p>
      </div>
    </div>
  );
};