import { store } from "../store";

import { actionType } from "../store/reducer/formReducer";

export const handleSelect = (e) => {
  store.dispatch({ type: actionType.SET_NAME, payload: e.target.value });
};

export const addNames = () => {
  const { name, names } = store.getState();
  names.push({ name });
  console.log("tt", names);
  store.dispatch({ type: actionType.ADD_NAMES, payload: [...names] });
  store.dispatch({ type: actionType.SET_NAME, payload: "" });
};
export const nameDel = (i) => {
  const { names } = store.getState();
  names.splice(i, 1);
  store.dispatch({ type: actionType.ADD_NAMES, payload: [...names] });
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});
