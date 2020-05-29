import { operationsPhotos } from '../Operations/OperationsPhotos';
import { operationsAuth } from '../Operations/OperationsAuth';
import { operationsPhotoAndUserDetails } from '../Operations/OperationsUserAndPhotoDetails';
import { commonAT } from './ActionsTypes';

export const commonAC = {
  toggleIsFetching(isFetching){
    return {
      type: commonAT.TOGGLE_IS_FETCHING,
      isFetching
    }
  }
}

export const unsplashPhotosAC = {
  getPhotos(){
    return operationsPhotos.getPhotos();
  },
  addPhotos(page){
    return operationsPhotos.addPhotos(page);
  },
  getRandomPhoto(){
    return operationsPhotos.getRandomPhoto();
  },
  toggleLikeOnPhoto(id, like){
    return operationsPhotos.toggleLikeOnPhoto(id, like);
  }
}

export const authAC = {
  getAuthenticationUrl(){
    return operationsAuth.getAuthenticationUrl();
  },

  setAuthInfo(){
    return operationsAuth.setAuthInfo();
  },
  setCurrentUser(){
    return operationsAuth.setCurrentUser();
  }
}

export const photoAndUserDetailsAC = {
  setUserAndPhotoInfo(userName, photoId){
    return operationsPhotoAndUserDetails.getUserAndPhotoInfo(userName, photoId);
  },
  toggleLikeOnPhotoDetails(id, like){
    return operationsPhotoAndUserDetails.toggleLikeOnPhotoDetails(id, like);
  }
}