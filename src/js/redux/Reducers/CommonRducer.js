import { commonAT } from '../Actions/ActionsTypes';

const initialState = {
  isFetching: false
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonAT.TOGGLE_IS_FETCHING:
      return {
        ...state,
       isFetching: action.isFetching
      };
    default:
      return state;
  }
}