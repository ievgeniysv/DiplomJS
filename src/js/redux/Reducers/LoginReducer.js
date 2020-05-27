import { authAT } from '../Actions/ActionsTypes';

const initialState = {
  isAuth: false,
  bearerToken: '',
  currentUser: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAT.SET_AUTH_INFO:
      return {
        ...state,
        isAuth: true,
        bearerToken: action.bearerToken,
      };
    case authAT.SET_USER_INFO:
      state = {
        ...state,
        isAuth: true,
        currentUser: {...state.currentUser},
      };
      state.currentUser = action.currentUser;
      return state;

    default:
      return state;
  }
}