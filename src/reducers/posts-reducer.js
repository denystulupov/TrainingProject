const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    posts: [
        "Nvidia в три раза опережает AMD по поставкам дискретных GPU..1",
        "Nvidia в три раза опережает AMD по поставкам дискретных GPU..2",
        "Nvidia в три раза опережает AMD по поставкам дискретных GPU..3"
        ]
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: return {
            ...state,
            posts: [...state.posts, action.newPost ]
        };
        case DELETE_POST: return {
            ...state,
            posts: state.posts.filter((elem, i) => action.id !== i)
        };
        default: return state
    }

};

export default  postReducer;

export const addPostAC = (newPost) => ({ type: ADD_POST, newPost: newPost});
export const deletePostAC = (id) => ({ type: DELETE_POST, id: id});