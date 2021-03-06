import React from 'react';
import classes from './Counter.module.css'

const Counter = (props) => {
    let counter = props.counter;
    return (
        <div className={classes.counter}>
            <h3>Counter</h3>
            <div className={classes.counter__value}>{counter}</div>
            <div>
                <button
                    className={`${classes.button} ${classes.deg}`}
                    onClick={() => props.addNumber(counter - 1)}
                >-</button>
                <button
                    className={`${classes.button} ${classes.add}`}
                    onClick={() => props.addNumber(counter + 1)}
                >+</button>
            </div>

            <button
                className={`${classes.button} ${classes.zero}`}
                onClick={props.setZero}
            >Сбросить</button>
        </div>
    );
}

export default Counter;