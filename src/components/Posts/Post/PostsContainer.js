import {connect} from "react-redux";
import Posts from "../Posts";
import {addPostAC, deletePostAC} from "../../../reducers/posts-reducer";

const mapStateToProps = state => {
    return {
        posts: state.postsPage.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: newPost => {
            dispatch(addPostAC(newPost))
        },
        deletePost: id => {
            dispatch(deletePostAC(id))
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer