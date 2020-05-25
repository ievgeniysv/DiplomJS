import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { unsplashPhotoReducer } from '../Reducers/UnsplashPhotoReducer';
import { loginReducer } from '../Reducers/LoginReducer';

const reducers = combineReducers({
  unsplashPhoto: unsplashPhotoReducer,
  login: loginReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;