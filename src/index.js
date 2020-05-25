import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './assets/js/redux/Store/Store';
import Unsplash, { toJson } from 'unsplash-js'

import './assets/css/reset.css';
import { App } from './assets/js/Component/App/App'

// const unsplash = new Unsplash({
//   accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
//   secret: "8f4i3XLhfCtQbUskzAKrjBj1hIrZ28cdC8tneQsTai8",
//   callbackUrl: "http://localhost:3000/auth"
// });
// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "public",
//   "write_likes"
// ]);
// location.assign(authenticationUrl);

// const unsplash = new Unsplash({
//   accessKey: "4AukpNrZaTVD3d0sNg_GlowTUTSvYgio4_dOOXDJMg0",
// });
// // noinspection JSUnresolvedVariable
// unsplash.photos.listPhotos(1, 10, "latest")
//   .then(toJson)
//   .then(json => {
//     console.log(json)
//   });

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('.app')
);


