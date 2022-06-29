import {INCREMENT_STEPS} from "./actions";

const initialState = {
    count: 0
};

export const stepsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_STEPS:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}