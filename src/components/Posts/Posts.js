import React from 'react';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";

const Posts = props => {

    let posts = props.posts.map((post, i) => <Post key={i} text={post} id={i} deletePost={props.deletePost}/>);
    return (
        <div>
            <h3>Posts</h3>
            {posts}
            <NewPost addPost={props.addPost}/>
        </div>
    );
};

export default Posts