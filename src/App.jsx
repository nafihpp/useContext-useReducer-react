import { Fragment } from "react";
import "./App.css";
import { UseContextTodo } from "./components/useContextTodo";
import { UseReducerTodo } from "./components/useReducerTodo";
import { UseReducerUseContext } from "./components/useReducerUseContext";

function App() {
    return (
        <>
            <UseContextTodo />
            <UseReducerTodo />
            <UseReducerUseContext />
        </>
    );
}

export default App;
