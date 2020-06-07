import {combineReducers, createStore} from 'redux';
import counterReducer from "./reducers/counter-reducer";
import postReducer from "./reducers/posts-reducer";

const reducers = combineReducers({
    counterPage: counterReducer,
    postsPage: postReducer
});

const store = createStore(reducers);

console.log(store.getState());

export default store;