import Axios from 'axios';


export const getStates = (val) => {
    return {
        type: "FETCH_STATES",
        payload : val
    }
} 

export const getState = (val) => {
     return {
         type : "GET_STATE",
         payload : val
     }
}

export function getStateName (val) {
    return dispatch => {
        dispatch(getState(val))
    }
}

export const getDistricts = (val) => {
      return {
          type : "FETCH_DISTRICT",
          payload : val
      }
}

export function FetchStates () {
    return dispatch => {
        Axios.get("https://api.covid19india.org/data.json").then((data) => {
            dispatch(getStates(data.data.statewise.splice(1)))
        })
    }
}

export function FetchDistricts () {
    return dispatch => {
        Axios.get("https://api.covid19india.org/state_district_wise.json").then((data) => {
            dispatch(getDistricts(data.data))
        })
    }
}