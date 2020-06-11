import React from 'react';
import classes from './Main.module.css'
import {Route} from "react-router-dom";
import Picture from "../Picture/Picture";
import CounterContainer from "../Counter/CounterContainer";
import PostsContainer from "../Posts/Post/PostsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Main = () => {
    return(
        <main className={classes.main}>
            <h2>Main Content</h2>

            <Route path='/picture' component={Picture}/>
            <Route path='/counter' component={CounterContainer}/>
            <Route path='/posts' component={PostsContainer}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/profile/:id' component={ProfileContainer}/>

        </main>
    )
};

export default Main;