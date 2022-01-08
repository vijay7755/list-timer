import users from './../../api/users'
import {
    FETCH_USER_LIST,
    UPDATE_SELECTED_USER,
    DELETE_AND_UPDATE_USER_LIST
} from "./types"


export const fetchUserList = () => async dispatch => {
    const response = await users.get('/api/?results=50')
    dispatch({
        type: FETCH_USER_LIST,
        payload: response.data.results
    })
    return response.data.results
}

export const updateSelectedUser = (user) => {
    return {
        type: UPDATE_SELECTED_USER,
        payload: user
    }
}

export const deleteUser = (user) => {
    return {
        type: DELETE_AND_UPDATE_USER_LIST,
        payload: user
    }
}