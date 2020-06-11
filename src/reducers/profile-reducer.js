const SET_PROFILE = 'SET_PROFILE';
const PROFILE_IS_LOADING = 'PROFILE_IS_LOADING';
const PROFILE_IS_ERROR = 'PROFILE_IS_ERROR';

const initialState = {
    profile: [],
    isLoading: false,
    isError: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case PROFILE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case PROFILE_IS_ERROR:
            return {
                ...state,
                isError: action.isError
            };
        default:
            return state
    }
};

export const setProfileAC = (profile) => ({type: SET_PROFILE, profile: profile});
export const profileIsLoading = (isLoading) => ({type: PROFILE_IS_LOADING, isLoading: isLoading});
export const profileIsError = (isError) => ({type: PROFILE_IS_ERROR, isError: isError});

export default profileReducer