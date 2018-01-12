import axios from "axios"

const RETRIEVE_EVENTS = "RETRIEVE_EVENTS";


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
  



const initialState = {
   events: {},
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
  
  
      default:
        return state;
    }
  }
  