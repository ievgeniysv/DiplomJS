import React from 'react';
import { Header } from '../Header/Header';
import { UnsplashPhotos } from '../UnsplashPhotos/UnsplashPhotos';
import { UserProfile } from '../UserProfile/UserProfile';
import { Route } from 'react-router-dom';
import { Auth, Login } from '../Login/Login';

export const App = (props) => {
  return (
    <>
      <Header/>
      <Route exact path="/" render={() => {
        return <UnsplashPhotos/>}}/>

      <Route path="/profile" render={() => {
        return <UserProfile/>}}/>

      <Route path="/login" render={() => {
        return <Login/>}}/>

      <Route path="/auth" render={() => {
        return <Auth/>}}/>

      {/*<UserProfile/>*/}
    </>
  );
};

