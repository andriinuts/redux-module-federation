import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment} from 'store-app/counter';


const StoreModuleManipulation = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increment())
    }

    return (
        <div>
            <span>Store count is: {count}
                <button style={{marginLeft: 10}} onClick={handleIncrease}>Increase</button>
            </span>
        </div>

    )
}

export default StoreModuleManipulation;