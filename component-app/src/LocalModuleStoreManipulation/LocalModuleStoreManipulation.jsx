import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incrementSteps} from "./store/actions";


export const LocalModuleStoreManipulation = () => {
    const count = useSelector(state => state.steps.count);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(incrementSteps())
    }

    return (
        <div>
            <span>Local store steps count is: {count}
                <button style={{marginLeft: 10}} onClick={handleIncrease}>Increase</button>
            </span>
        </div>
    )
}
