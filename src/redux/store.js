
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {saveEmployee,getEmployes} from "./midelwear/midelwear"

import employee from "./reduces/employee"
const reducer= combineReducers({employee});

const store= createStore(reducer, (applyMiddleware(saveEmployee,getEmployes)));

window.store= store;
export default store;
