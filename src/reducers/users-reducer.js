const SET_USERS = 'SET_USERS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR';

const initialState = {
    users: [],
    isLoading: true,
    isError: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case TOGGLE_IS_ERROR:
            return {
                ...state,
                isError: action.isError,
                isLoading: false
            };
        default:
            return state
    }
};

export const setUsersAC = (users) => ({ type: SET_USERS, users: users});
export const toggleIsLoadingAC = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading});
export const toggleIsErrorAC = (isError) => ({ type: TOGGLE_IS_ERROR, isError: isError});

export default usersReducer;