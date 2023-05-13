import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const UseContextTodo = () => {
    const state = useContext(CounterContext);

    const decrement = () => {
        state.setCount(state.count - 1);
    };
    const increment = () => {
        state.setCount(state.count + 1);
    };
    const incrementby = () => {
        state.setCount(state.count + 10);
    };

    return (
        <div>
            <h1>useContext Counter</h1>
            <p>{state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementby}>Increment by 10</button>
        </div>
    );
};

export default UseContextTodo;
