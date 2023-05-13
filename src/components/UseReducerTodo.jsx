import React, { useReducer, useState } from "react";
import { reducer } from "../reducer/CounterReducer";
import { ACTIONS } from "../reducer/ACTIONS";

const UseReducerTodo = () => {
    const intialState = { count: 0 };

    const [state, dispatch] = useReducer(reducer, intialState);

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    };

    const incrementby = () => {
        dispatch({ type: ACTIONS.INCREMENTBY, payload: 5 });
    };

    return (
        <div>
            <h1>useReducer Counter</h1>
            <p>{state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementby}>Increment by 5</button>
        </div>
    );
};
export default UseReducerTodo;
