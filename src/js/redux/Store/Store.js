import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { unsplashPhotoReducer } from '../Reducers/UnsplashPhotoReducer';
import { loginReducer } from '../Reducers/LoginReducer';
import { userAndPhotoDetailReducers } from '../Reducers/UserAndPhotoDetailReducer';

const reducers = combineReducers({
  unsplashPhoto: unsplashPhotoReducer,
  login: loginReducer,
  userAndPhotoDetails: userAndPhotoDetailReducers,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;