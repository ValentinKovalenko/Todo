import { compose, createStore} from "redux";
import {formReducer} from "./reducer/formReducer";


export const store = createStore(formReducer, compose)