import { store } from "../store";

import { actionType } from "../store/reducer/formReducer";

export const handleSelect = (e) => {
  store.dispatch({ type: actionType.SET_NAME, payload: e.target.value });
};

export const setNames = (payload) => {
  store.dispatch({ type: actionType.ADD_NAMES, payload });
};

export const addNames = () => {
  const { name, names } = store.getState();
  names.push({ name, checked: true, id: new Date().getTime() });
  console.log("names", names);
  store.dispatch({ type: actionType.ADD_NAMES, payload: [...names] });
  store.dispatch({ type: actionType.SET_NAME, payload: "" });
};
export const nameDel = (i) => {
  const { names } = store.getState();
  names.splice(i, 1);
  store.dispatch({ type: actionType.ADD_NAMES, payload: [...names] });
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
