import React from 'react';
// noinspection ES6CheckImport
import { Redirect } from 'react-router-dom';
import { authAC, } from '../../redux/Actions/Actions';
import { connect } from 'react-redux';

export class Login extends React.Component {
  componentDidMount() {
    this.props.getAuthenticationUrl();
  }

  render() {
    return null
  }
}

export class Auth extends React.Component {
  componentDidMount() {
    this.props.setAuthInfo();
    if(this.props.isAuth){
       this.props.setCurrentUser();
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.isAuth){
      this.props.setCurrentUser();
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
    setAuthInfo: () => {
      dispatch(authAC.setAuthInfo());
    },
    getAuthenticationUrl: () => {
      dispatch(authAC.getAuthenticationUrl());
    },
    setCurrentUser: ()=> {
      dispatch(authAC.setCurrentUser())
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
