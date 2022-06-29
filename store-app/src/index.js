import { createStore } from "redux-dynamic-modules";
import {counterReducer} from "./counter/reducers";

const maimStoreModule = {
    id: 'main-store',
    reducerMap: {
        counter: counterReducer
    }
}

export default createStore({}, maimStoreModule);