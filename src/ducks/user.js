import axios from "axios";

const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_NAME = "UPDATE_NAME";

export function updateUsername(username, id) {
  return {
    type: UPDATE_NAME,
    payload: axios
      .put("/api/name", { username, id })
      .then(response => response.data)
      .catch(console.log)
  };
}

export function retrieveUser() {
  return {
    type: RETRIEVE_USER,
    payload: axios
      .get("/api/me")
      .then(response => response.data)
      .catch(console.log)
  };
}

const initialState = {
  user: {},
  isLoading: false,
  didError: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${RETRIEVE_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${RETRIEVE_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    case `${RETRIEVE_USER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    case `${UPDATE_NAME}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}
