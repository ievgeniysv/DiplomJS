import Unsplash from 'unsplash-js';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { authAC, } from '../../redux/Actions/Actions';
import { connect } from 'react-redux';

export class Login extends React.Component {
  componentDidMount() {
    const unsplash = new Unsplash({
      accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
      secret: "8f4i3XLhfCtQbUskzAKrjBj1hIrZ28cdC8tneQsTai8",
      callbackUrl: "http://localhost:3000/auth"
    });
    // noinspection JSUnresolvedVariable
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes"
    ]);
    location.assign(authenticationUrl);
  }

  render() {
    return null
  }
}

export class Auth extends React.Component {
  componentDidMount() {
    const unsplash = new Unsplash({
      accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
      secret: "8f4i3XLhfCtQbUskzAKrjBj1hIrZ28cdC8tneQsTai8",
      callbackUrl: "http://localhost:3000/auth"
    });
    const code = location.search.split('code=')[1];
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.props.setAuth(json.access_token);
          unsplash.auth.setBearerToken(json.access_token);
        });
    }
  }

  render() {
    if (this.props.isAuth) {
      return <Redirect to={'/'}/>
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (code) => {
      dispatch(authAC.setAuth(code));
    },
  }
}

Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
