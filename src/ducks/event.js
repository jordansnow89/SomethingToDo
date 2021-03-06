import axios from "axios"

const RETRIEVE_EVENTS = "RETRIEVE_EVENTS";
const ADD_EVENT_TO_PROFILE = "ADD_EVENT_TO_PROFILE"


//INTERNAL API CALL TO RETRIEVE EVENTS
export function retrieveEvents(city, category, distance, date, isFree) {
  let url = `/api/getEventData?city=${city}`

  if (category) {
    url += `&categories=${category}`
  }

  if (distance) {
    url += `&distance=${distance}`
  }

  if (date) {
    url += `&date=${date}`
  }

  if (isFree) {
    url += `&price=${isFree}`
  }
  return {
    type: RETRIEVE_EVENTS,
    payload: axios
      .get(url)
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(console.log)


  };
}

//INTERNAL API CALL TO ADD EVENTS TO USER PROFILE
export function addEventToProfile(userid, eventData) {
  return {
    type: ADD_EVENT_TO_PROFILE,
    payload: axios
      .put("/api/addEventToProfile", { userid, eventData })
      .then(response => response.data)
      .catch(console.log)
  }
}



//DECLARING INITIAL STATE
const initialState = {
  events: {},
  isLoading: false,
  didError: false
};

//EVENT REDUCER
export default function eventReducer(state = initialState, action) {
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
