const ADD_NUMBER = 'ADD_NUMBER';
const SET_ZERO = 'SET_ZERO';

const initialState = {
    counter: 10,
    abc: [1, 2, 3]
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                counter: action.number
            };
        case SET_ZERO:
            return {
                ...state,
                counter: 0
            };
        default: return state
    }
};

export const addNumberAC = (number) => ({type: ADD_NUMBER, number: number});
export const setZeroAC = () => ({type: SET_ZERO});

export default counterReducer;