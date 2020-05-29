import { photoAndUserDetailsAPI, unsplashPhotosAPI } from '../../API/API';
import { photoAndUserDetailsAT, unsplashPhotoAT } from '../Actions/ActionsTypes';
import { commonAC } from '../Actions/Actions';

export const operationsPhotoAndUserDetails = {
  getUserAndPhotoInfo: (userName, photoId) => {
    return (dispatch) => {
      dispatch(commonAC.toggleIsFetching(true));
      photoAndUserDetailsAPI.getUserAndPhotoInfo(userName, photoId)
        .then(response => {
          dispatch({
            type: photoAndUserDetailsAT.SET_USER_INFO,
            user: response[0]
          });
          dispatch({
            type: photoAndUserDetailsAT.SET_PHOTO_INFO,
            photo: response[1]
          });
          dispatch(commonAC.toggleIsFetching(false));
        });
    }
  },

  toggleLikeOnPhotoDetails: (id, like) => {
    return (dispatch) => {
      if(like) {
        unsplashPhotosAPI.dislikePhoto(id)
          .then(() => {
            dispatch({
              type: photoAndUserDetailsAT.TOGGLE_LIKE_ON_PHOTO_DETAILS,
              likedByUser: false,
              incrementLike: -1
            });
          });
      } else {
        unsplashPhotosAPI.likePhoto(id)
          .then(() => {
            dispatch({
              type: photoAndUserDetailsAT.TOGGLE_LIKE_ON_PHOTO_DETAILS,
              likedByUser: true,
              incrementLike: 1
            });
          });
      }
    }
  }

}