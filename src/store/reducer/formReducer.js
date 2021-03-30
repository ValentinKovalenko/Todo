export const actionType = {
    SET_NAME: 'SET_NAME',
    ADD_NAMES: 'ADD_NAMES',
    ADD_SPLICE: 'ADD_SPLICE'
}

const initialState = {
    name: '',
    names: [],
    addSplice: false
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
        case actionType.ADD_SPLICE:
            return {
                ...state,
                addSplice: action.payload
            }
        default:
            return state
    }
}