import React, {useState} from 'react';
import classes from './NewPost.module.css'

const NewPost = props => {

    let [newPostText, setNewPostText] = useState("");

    const onNewPostChange = e => {
        setNewPostText(e.target.value)
    };

    const onAddNewPost = () => {
        props.addPost(newPostText);
        setNewPostText("")
    };

    return (
        <div className={classes.newPost}>
            <input
                type="text"
                placeholder="New post"
                value={newPostText}
                onChange={onNewPostChange}
            />
            <button onClick={onAddNewPost}>Add</button>
        </div>
    );
};

export default NewPost