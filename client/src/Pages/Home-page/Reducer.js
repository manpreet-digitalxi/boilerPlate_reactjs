import * as constants from "./Types";

const initialState = {
  posts: [],
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_USERS:
      return {
        ...state,
        posts: action.payload
      };

    case constants.SET_USERS_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
