import { UPDATE_SELECTED_USER } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_USER:
            return action.payload
        default:
            return state
    }
}