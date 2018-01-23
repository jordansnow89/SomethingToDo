import axios from "axios";

const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const RETRIEVE_USER_LIST = "RETRIEVE_USER_LIST";
const REMOVE_EVENT_FROM_LIST = "REMOVE_EVENT_FROM_LIST"

export function updateProfile(updatedUser, userid) {
  console.log(updatedUser, userid)
  return {
    type: UPDATE_PROFILE,
    payload: axios
      .put("/api/update", {updatedUser, userid  })
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

export function retrieveUserList(userid) {
  return {
    type: RETRIEVE_USER_LIST,
    payload: axios
      .get(`/api/getuserlist?userid=${userid}`)
      .then(response => response.data)
      .catch(console.log)
  }
}

export function removeEventFromList(selection_id, userid ){
  console.log(selection_id, userid)
  return {
    type: REMOVE_EVENT_FROM_LIST,
    payload: axios
    .delete(`/api/removefromlist?selectionid=${selection_id}&userid=${userid}`)
    .then(response => response.data)
    .catch(console.log)

  }
}


const initialState = {
  user: {},
  userList: [],
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

    case `${UPDATE_PROFILE}_FULFILLED`:
      return Object.assign({}, state, {
         user: action.payload
         });

    case `${RETRIEVE_USER_LIST}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${RETRIEVE_USER_LIST}_FULFILLED`:
      return Object.assign({}, state, { 
        isLoading: false,
         userList: action.payload 
         });

    case `${RETRIEVE_USER_LIST}_REJECTED`:
      return Object.assign({}, state, { 
        isLoading: false, 
        didError: true 
        });

    case `${REMOVE_EVENT_FROM_LIST}_FULFILLED`:
        return Object.assign({}, state, {
          isLoading: false,
          userList: action.payload
          
        });
  
        

    default:
      return state;
  }
}
