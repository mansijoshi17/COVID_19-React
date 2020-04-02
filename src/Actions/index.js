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

export function FetchStates () {
    return dispatch => {
        Axios.get("https://api.covid19india.org/data.json").then((data) => {
            dispatch(getStates(data.data.statewise.splice(1)))
        })
    }
}