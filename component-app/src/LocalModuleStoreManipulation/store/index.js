import {stepsReducer} from "./reducers";

export const stepsModule = {
    id: 'steps-store',
    reducerMap: {
        steps: stepsReducer
    }
}