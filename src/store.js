import {createStore} from 'redux';
import counterReducer from "./reducers/counter-reduser";

let store = createStore(counterReducer);
console.log(store.getState())
export default store;