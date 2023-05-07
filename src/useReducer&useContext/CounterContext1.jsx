import React, { createContext, useReducer } from "react";
import { UsReducer } from "./UsReducer";

export const CounterContext1 = createContext();

export const CounterProvider1 = ({ children }) => {
    const intialState = { count: 0 };
    const [state, dispatch] = useReducer(UsReducer, intialState);
    return (
        <CounterContext1.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext1.Provider>
    );
};
