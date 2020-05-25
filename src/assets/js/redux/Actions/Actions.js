import { operationsPhotos } from '../Operations/OperationsPhotos';
import { operationsAuth } from '../Operations/OperationsAuth';
import { authAT } from './ActionsTypes';

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
  setAuth(code){
    return {
      type: authAT.SET_AUTH,
      isAuth: true,
      bearerToken: code
    }
  },

}