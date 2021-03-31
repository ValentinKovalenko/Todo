import {store} from "../store";

import {actionType} from "../store/reducer/formReducer";

let name;
export const handleSelect = e => {
     name = e.target.value;
    store.dispatch({type: actionType.SET_NAME, payload: name})
    console.log('name',name)
}
const names = []

export const addNames = () => {
    console.log('add', name)
    names.push({name})
    console.log('tt', names)
    store.dispatch({type: actionType.ADD_NAMES, payload: names})
    store.dispatch({type: actionType.SET_NAME, payload: ''})
}
 export const nameDel =(i)=>{
    names.splice(i,1)
    const addSplice = true
     console.log(names)
    store.dispatch({type: actionType.DELETE_NAME, payload: addSplice})
     console.log(names)
}