import { authAPI, } from '../../API/API';
import { authAT, } from '../Actions/ActionsTypes';

export const operationsAuth = {
  getAuthenticationUrl: () => {
    return (dispatch) => {
      authAPI.getAuthenticationUrl();
    }
  },
  setAuthInfo: () => {
    return (dispatch) => {
      authAPI.setAuthInfo()
        .then(response => {
          // noinspection JSUnresolvedVariable
          dispatch({
            type: authAT.SET_AUTH_INFO,
            bearerToken: response.access_token
          });
        });
    }
  },
  setCurrentUser: () => {
    return (dispatch) => {
      authAPI.getCurrentUser()
        .then(response => {
          if(response.error){
            return null
          } else {
            dispatch({
              type: authAT.SET_USER_INFO,
              currentUser: response
            });
          }

        })
    }
  }
}