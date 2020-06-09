import React from 'react';
import classes from './Post.module.css'

const Post = props => {
    return (
        <div className={classes.post}>
            <p>{props.text}
                <span onClick={() => props.deletePost(props.id)}>
                    &#10006;
                </span>
            </p>
        </div>
    );
};

export default Post