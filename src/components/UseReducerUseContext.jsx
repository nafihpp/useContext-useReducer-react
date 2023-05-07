import React, { useContext } from "react";
import { CounterContext1 } from "../useReducer&useContext/CounterContext1";
import { ACTIONS } from "../useReducer&useContext/ACTIONS";

export const UseReducerUseContext = () => {
    const value = useContext(CounterContext1);

    const increment = () => {
        value.dispatch({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        value.dispatch({ type: ACTIONS.DECREMENT });
    };

    const decrementby = () => {
        value.dispatch({ type: ACTIONS.DECREMENTBY, payload: 10 });
    };
    return (
        <div>
            <h1>useReducer & userContext</h1>
            <p>{value.state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={decrementby}>decrement by 10</button>
        </div>
    );
};
