import axios from "axios"

const RETRIEVE_EVENTS = "RETRIEVE_EVENTS";
const ADD_EVENT_TO_PROFILE = "ADD_EVENT_TO_PROFILE"


export function retrieveEvents(city) {
    return {
      type: RETRIEVE_EVENTS,
      payload: axios
        .get(`/api/getEventData?city=${city}`)
        .then(response => {
          console.log(response)
           return response.data})
        .catch(console.log)
    };
  }

  export function addEventToProfile(userid, eventData) {
    return {
      type: ADD_EVENT_TO_PROFILE,
      payload: axios
        .put("/api/addEventToProfile", { userid, eventData })
        .then( response => response.data )
        .catch(console.log)
    }
  }
  



const initialState = {
   events: {},
   userEvents: {},
   isLoading: false,
   didError: false
  };
  

  export default function eventReducer (state = initialState, action) {
    switch (action.type) {
      case `${RETRIEVE_EVENTS}_PENDING`:
        return Object.assign({}, state, { isLoading: true });
  
      case `${RETRIEVE_EVENTS}_FULFILLED`:
        return Object.assign({}, state, {
          isLoading: false,
          events: action.payload
        });
  
      case `${RETRIEVE_EVENTS}_REJECTED`:
        return Object.assign({}, state, {
          isLoading: false,
          didError: true
        });

      case `${ADD_EVENT_TO_PROFILE}_FULFILLED`:
        return Object.assign({}, state, {
        });
  
  
      default:
        return state;
    }
  }
  