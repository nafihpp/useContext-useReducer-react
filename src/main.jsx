import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/CounterContext.jsx";
import { CounterProvider1 } from "./useReducer&useContext/CounterContext1.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterProvider>
            <CounterProvider1>
                <App />
            </CounterProvider1>
        </CounterProvider>
    </React.StrictMode>
);
