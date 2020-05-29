import { photoAndUserDetailsAPI } from '../../API/API';
import { photoAndUserDetailsAT } from '../Actions/ActionsTypes';
import { commonAC } from '../Actions/Actions';

export const operationsPhotoAndUserDetails = {
  getUserAndPhotoInfo: (userName, photoId) => {
    return (dispatch) => {
      dispatch(commonAC.toggleIsFetching(true));
      photoAndUserDetailsAPI.getUserAndPhotoInfo(userName, photoId)
        .then(response => {
          dispatch({
            type: photoAndUserDetailsAT.SET_USER_INFO,
            user: response[0]
          });
          dispatch({
            type: photoAndUserDetailsAT.SET_PHOTO_INFO,
            photo: response[1]
          });
          dispatch(commonAC.toggleIsFetching(false));
        });
    }
  },

}