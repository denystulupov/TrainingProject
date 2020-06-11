import {combineReducers, createStore} from 'redux';
import counterReducer from "./reducers/counter-reducer";
import postReducer from "./reducers/posts-reducer";
import usersReducer from "./reducers/users-reducer";
import profileReducer from "./reducers/profile-reducer";

const reducers = combineReducers({
    counterPage: counterReducer,
    postsPage: postReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
});

const store = createStore(reducers);

console.log(store.getState());

export default store;