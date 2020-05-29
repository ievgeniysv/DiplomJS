import React from 'react';
import { Header } from '../Header/Header';
import { UnsplashPhotos } from '../UnsplashPhotos/UnsplashPhotos';
import { UserAndPhotoDetails } from '../UserAndPhotoDetails/UserAndPhotoDetails';
// noinspection ES6CheckImport
import { Route } from 'react-router-dom';
import { Auth, Login } from '../Login/Login';
import { connect } from 'react-redux';
import { authAC } from '../../redux/Actions/Actions';

export class App extends React.Component {

  // componentDidMount() {
  //   this.props.setCurrentUser();
  // }

  render() {
    return (
      <>
        <Header
          currentUser={this.props.currentUser}
        />
        <Route exact path="/" component={UnsplashPhotos}/>
        <Route path="/profile/:userName?/:photoId?" component={UserAndPhotoDetails}/>
        <Route path="/login" component={Login}/>
        <Route path="/auth" component={Auth}/>
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