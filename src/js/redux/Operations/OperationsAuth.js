import { authAPI, } from '../../API/API';
import { authAT, } from '../Actions/ActionsTypes';

// export const operationsAuth = {
//   setAuth: (code) => {
//     debugger
//     return (dispatch) => {
//       authAPI.setAuth(code)
//         .then(json => {
//           console.log(json)
//           dispatch({
//             type: authAT.SET_AUTH,
//             bearerToken: json.access_token
//           })
//           unsplash.auth.setBearerToken(json.access_token);
//         });
//     }
//   },
// }