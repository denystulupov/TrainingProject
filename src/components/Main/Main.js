import React from 'react';
import classes from './Main.module.css'
import {Route} from "react-router-dom";
import Picture from "../Picture/Picture";
import CounterContainer from "../Counter/CounterContainer";
import PostsContainer from "../Posts/Post/PostsContainer";

const Main = () => {
    return(
        <main className={classes.main}>
            <h2>Main Content</h2>

            <Route path='/picture' component={Picture}/>
            <Route path='/counter' component={CounterContainer}/>
            <Route path='/posts' component={PostsContainer}/>

        </main>
    )
};

export default Main;