export const actionType = {
    SET_NAME: 'SET_NAME',
    ADD_NAMES: 'ADD_NAMES',
    DELETE_NAME: 'DELETE_NAME'
}

const initialState = {
    name: '',
    names: [],
    deleteName: false
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case actionType.ADD_NAMES:
            return {
                ...state,
                names: action.payload
            }
        case actionType.DELETE_NAME:
            return {
                ...state,
                deleteName: action.payload
            }
        default:
            return state
    }
}