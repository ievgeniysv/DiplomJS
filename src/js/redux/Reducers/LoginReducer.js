import { authAT } from '../Actions/ActionsTypes';

const initialState = {
  isAuth: false,
  bearerToken: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAT.SET_AUTH:
      state = {...state}
      return{
        isAuth: true,
        bearerToken: action.bearerToken,
      }
    default:
      return state;
  }
}