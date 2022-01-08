import { FETCH_USER_LIST, DELETE_AND_UPDATE_USER_LIST } from './../actions/types'

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_USER_LIST:
            return action.payload
        case DELETE_AND_UPDATE_USER_LIST:
            const deleteUser = action.payload
            return state.filter(user => {
                return user.login.uuid !== deleteUser.login.uuid
            })
        default:
            return state
    }
}