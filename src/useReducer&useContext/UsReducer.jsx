import { ACTIONS } from "./ACTIONS";

export const UsReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "decrementBy":
            return { count: state.count - action.payload };
        default:
            break;
    }
};
