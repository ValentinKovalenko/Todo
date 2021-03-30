import {store} from "../store";

import {actionType} from "../store/reducer/formReducer";

export const handleSelect = e => {
    const name = e.target.value;
    store.dispatch({type: actionType.SET_NAME, payload: name})
    console.log('name',name)
}
const names = []

export const addNames = ({name}) => {
    names.push({name})
    console.log('tt', names)
    store.dispatch({type: actionType.ADD_NAMES, payload: names})
}
export const nameDel =(i)=>{
    names.splice(i,1)
  const addSplice = true
    store.dispatch({type: actionType.ADD_SPLICE, payload: addSplice})
}