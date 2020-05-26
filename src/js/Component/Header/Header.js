import React from 'react';
import s from './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return (
    <>
      <header className={`${s.header} center`}>
        <a href="" className={s.title}>MyUnsplashApp</a>
        <form action="" className={s.searchForm}>
          <input
            id={'searchForm__field'}
            type="text"
            className={s.searchForm__field}
          />
          <label htmlFor='searchForm__field' className={s.searchForm__label}>Search</label>
        </form>
        <NavLink to="/login/" className={s.login}>LOGIN</NavLink>
        {/*<img*/}
        {/*  src={require('../../../img/icon/user.png').default}*/}
        {/*  alt=""*/}
        {/*  className={s.avatar}*/}
        {/*/>*/}
      </header>
    </>
  );
};

