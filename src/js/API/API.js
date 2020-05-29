import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
  secret: "8f4i3XLhfCtQbUskzAKrjBj1hIrZ28cdC8tneQsTai8",
  callbackUrl: "http://localhost:3000/auth",
});

const PAGE = 1;
const PER_PAGE = 15;

export const unsplashPhotosAPI = {
  getUnsplashPhotos() {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.listPhotos(PAGE, PER_PAGE, 'latest').then(toJson);
  },
  addUnsplashPhotos(page) {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.listPhotos(page, PER_PAGE, 'latest').then(toJson);
  },

  getRandomPhoto() {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.getRandomPhoto().then(toJson);
  },

  likePhoto(id) {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.likePhoto(id).then(toJson);
  },

  dislikePhoto(id) {
    // noinspection JSUnresolvedVariable
    return unsplash.photos.unlikePhoto(id).then(toJson);
  }

}

export const authAPI = {
  getAuthenticationUrl() {
    // noinspection JSUnresolvedVariable
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "write_likes"
    ]);
    location.assign(authenticationUrl);
  },
  setAuthInfo() {
    const code = location.search.split('code=')[1];
    if (code) {
      // noinspection JSUnresolvedVariable
      return unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          // noinspection JSUnresolvedVariable
          unsplash.auth.setBearerToken(json.access_token);
          return json;
        });
    }
  },
  getCurrentUser() {
    // noinspection JSUnresolvedVariable
    return unsplash.currentUser.profile().then(toJson);
  }
}

export const photoAndUserDetailsAPI = {
  getUserAndPhotoInfo(userName, photoId) {
    // noinspection JSUnresolvedVariable
    return Promise.all([
        unsplash.users.profile(userName).then(toJson),
        unsplash.photos.getPhoto(photoId).then(toJson),
      ]
    );
  }
}