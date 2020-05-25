import { unsplashPhotoAT } from '../Actions/ActionsTypes';

const initialState = {
  photos: [],
  page: 1,
  randomPhoto:{}
};

export const unsplashPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case unsplashPhotoAT.GET_PHOTOS:
      state = {...state};
      state.photos = action.photos;
      return state;

    case unsplashPhotoAT.ADD_PHOTOS:
      state = {
        ...state,
        photos: [...state.photos, ...action.photos],
        page: state.page + 1,
      };
     state.photos =  removeDuplicates(state.photos, 'id');
      return state;

    case unsplashPhotoAT.GET_RANDOM_PHOTO:
      state = {
        ...state,
        randomPhoto: {...state.randomPhoto}
      };
      state.randomPhoto = action.photo;

      return state
    default:
      return state;
  }
}


function removeDuplicates(originalArray, prop) {
  let newArray = [];
  let lookupObject = {};

  for(let i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(let i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}