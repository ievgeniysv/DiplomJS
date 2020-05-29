import React from 'react';
import s from './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = ({currentUser}) => {

  // noinspection JSUnresolvedVariable
  return (
    <>
      <header className={`${s.header} center`}>
        <NavLink to={'/'} className={s.title}>My photo gallery with Unsplash API </NavLink>
        <form action="" className={s.searchForm}>
          <input
            id={'searchForm__field'}
            type="text"
            className={s.searchForm__field}
          />
          <label htmlFor='searchForm__field' className={s.searchForm__label}>Search</label>
        </form>
        {
          currentUser.profile_image ?
            <div className={s.avatarContainer}>
              <img
                src={currentUser.profile_image.small
                  ?
                  currentUser.profile_image.small
                  :
                  require('../../../assets/img/icon/user.png').default
                }
                alt=""
                className={s.avatar}
              />
              <p className={s.userName}>{currentUser.name}</p>
            </div>
            :
            <NavLink to="/login/" className={s.login}>LOGIN</NavLink>
        }

      </header>
    </>
  );
};

