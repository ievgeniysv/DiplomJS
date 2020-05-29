import { photoAndUserDetailsAT } from '../Actions/ActionsTypes';

const initialState = {
  user: {},
  photo: {},
};

export const userAndPhotoDetailReducers = (state = initialState, action) => {
  switch (action.type) {

    case photoAndUserDetailsAT.SET_USER_INFO:
      state = {
        ...state,
        user: {...state.user}
      };
      state.user = action.user;
      return state;

    case photoAndUserDetailsAT.SET_PHOTO_INFO:
      state = {
        ...state,
        photo: {...state.photo}
      };
      state.photo = action.photo;
      return state;

    case photoAndUserDetailsAT.TOGGLE_LIKE_ON_PHOTO_DETAILS:
      state = {
        ...state,
        photo: {...state.photo}
      };
      state.photo.liked_by_user = action.likedByUser;
      state.photo.likes =  state.photo.likes + action.incrementLike;
      return state;

    default:
      return state;
  }
}