import * as constants from "./Types";

// Test Route
export const getUsersRequest = () => {
  return {
    type: constants.GET_USERS_REQUEST
  };
};

export const setUsers = posts => {
  return {
    type: constants.SET_USERS,
    payload: posts
  };
};

export const setUsersErrors = errors => {
  return {
    type: constants.SET_USERS_ERRORS,
    payload: errors
  };
};
