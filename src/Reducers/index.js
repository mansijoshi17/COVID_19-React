const INITIAL_STATE = {
    StatesList: null,
    SelectedState: null,
    DistrictList : null
}


export const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "FETCH_STATES":
            state.StatesList = action.payload
            break;
        case "GET_STATE":
            state.SelectedState = action.payload
            break;
        case "FETCH_DISTRICT":
             state.DistrictList = action.payload
            break;
        default:
            return state
    }
    return { ...state };
}
