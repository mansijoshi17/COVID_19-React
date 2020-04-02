const INITIAL_STATE = {
    StatesList: null,
    SelectedState: null
}


export const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "FETCH_STATES":
            state.StatesList = action.payload
            break;
        case "GET_STATE":
            state.SelectedState = action.payload
            break;
        default:
            return state
    }
    return { ...state };
}
