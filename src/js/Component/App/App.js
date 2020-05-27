import React from 'react';
import { Header } from '../Header/Header';
import { UnsplashPhotos } from '../UnsplashPhotos/UnsplashPhotos';
import { UserProfile } from '../UserProfile/UserProfile';
// noinspection ES6CheckImport
import { Route } from 'react-router-dom';
import { Auth, Login } from '../Login/Login';
import { connect } from 'react-redux';
import { authAC } from '../../redux/Actions/Actions';

export class App extends React.Component {

  componentDidMount() {
    this.props.setCurrentUser();
  }

  render() {
    return (
      <>
        <Header/>
        <Route exact path="/" render={() => {
          return <UnsplashPhotos/>
        }}/>
        <Route path="/profile" render={() => {
          return <UserProfile/>
        }}/>
        <Route path="/login" render={() => {
          return <Login/>
        }}/>
        <Route path="/auth" render={() => {
          return <Auth/>
        }}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth,
    currentUser: state.login.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: () => {
      dispatch(authAC.setCurrentUser())
    }
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);