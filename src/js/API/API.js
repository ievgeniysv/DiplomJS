import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
});

export const unsplashPhotosAPI = {
  getUnsplashPhotos() {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.listPhotos(1, 15, 'latest').then(toJson);
  },
  addUnsplashPhotos(page) {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.listPhotos(page, 15, 'latest').then(toJson);
  },

  getRandomPhoto() {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.getRandomPhoto().then(toJson);
  }
}

export const authAPI = {
  setAuth() {

    return unsplash.auth.userAuthentication(code).then(res => res.json())
  }
}