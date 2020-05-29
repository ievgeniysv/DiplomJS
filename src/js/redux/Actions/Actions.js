import { operationsPhotos } from '../Operations/OperationsPhotos';
import { operationsAuth } from '../Operations/OperationsAuth';
import { operationsPhotoAndUserDetails } from '../Operations/OperationsUserAndPhotoDetails';

export const unsplashPhotosAC = {
  getPhotos(){
    return operationsPhotos.getPhotos();
  },
  addPhotos(page){
    return operationsPhotos.addPhotos(page);
  },
  getRandomPhoto(){
    return operationsPhotos.getRandomPhoto();
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
  }
}