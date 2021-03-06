import { unsplashPhotosAPI } from '../../API/API';
import { unsplashPhotoAT } from '../Actions/ActionsTypes';
import { commonAC } from '../Actions/Actions';

export const operationsPhotos = {
  getPhotos: () => {
    return (dispatch) => {
      unsplashPhotosAPI.getUnsplashPhotos()
        .then(response => {
          dispatch({
            type: unsplashPhotoAT.GET_PHOTOS,
            photos: response
          })
        });
    }
  },

  addPhotos: () => {
    return (dispatch, getState) => {
      dispatch(commonAC.toggleIsFetching(true));
      let page = getState().unsplashPhoto.page + 1;
      unsplashPhotosAPI.addUnsplashPhotos(page)
        .then(response => {
          dispatch({
            type: unsplashPhotoAT.ADD_PHOTOS,
            photos: response
          });
          if(Array.isArray(response)) {
            dispatch(commonAC.toggleIsFetching(false));
          }
        });
    }
  },

  getRandomPhoto: () => {
    return (dispatch) => {
      unsplashPhotosAPI.getRandomPhoto()
        .then(response => {
          dispatch({
            type: unsplashPhotoAT.GET_RANDOM_PHOTO,
            photo: response
          })
        });
    }
  },

  toggleLikeOnPhoto: (id, like) => {
    return (dispatch) => {
      if(like) {
        unsplashPhotosAPI.dislikePhoto(id)
          .then(() => {
            dispatch({
              type: unsplashPhotoAT.TOGGLE_LIKE_ON_PHOTO,
              likedByUser: false,
              id,
              incrementLike: -1
            });
          });
      } else {
        unsplashPhotosAPI.likePhoto(id)
          .then(() => {
            dispatch({
              type: unsplashPhotoAT.TOGGLE_LIKE_ON_PHOTO,
              likedByUser: true,
              id,
              incrementLike: 1
            });
          });
      }
    }
  }

}