import React from 'react';
import classes from './Main.module.css'
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import CounterContainer from "../Counter/CounterContainer";

const Main = () => {
    return(
        <main className={classes.main}>
            <h2>Main Content</h2>

            <Route path='/home' component={Home}/>
            <Route path='/counter' component={CounterContainer}/>

        </main>
    )
};

export default Main;