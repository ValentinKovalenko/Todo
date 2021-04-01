export const actionType = {
  SET_NAME: "SET_NAME",
  ADD_NAMES: "ADD_NAMES",
};

const initialState = {
  name: "",
  names: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionType.ADD_NAMES:
      return {
        ...state,
        names: action.payload,
      };
    default:
      return state;
  }
};
