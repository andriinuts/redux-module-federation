import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import StoreModuleManipulation from 'component-app/StoreModuleManipulation';

const LocalModuleStoreManipulation = React.lazy(() => import('component-app/LocalModuleStoreManipulation'));
import {increment} from 'store-app/counter';


export default () => {
    const [isLocalModuleStoreVisible, setIsLocalModuleStoreVisible] = useState(false);
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increment())
    }

    const handleShowLocalModuleStore = () => {
        setIsLocalModuleStoreVisible(state => !state);
    }

    const localModuleStoreButtonText = isLocalModuleStoreVisible ? 'Hide' : 'Show';

    return (
        <div>
            <div>
                <b>Main app:</b>
                <div>Store count is: {count}
                    <button style={{marginLeft: 10}} onClick={handleIncrease}>Increase</button>
                </div>
            </div>

            <div style={{marginTop: 10}}>
                <b>Module with main store manipulation:</b>
                <StoreModuleManipulation/>
            </div>


            <button onClick={handleShowLocalModuleStore}>{localModuleStoreButtonText}</button>

            {isLocalModuleStoreVisible && (
                <React.Suspense fallback="Loading...">
                    <div>
                        <b>Module with his local store manipulation:</b>
                        <LocalModuleStoreManipulation/>
                    </div>
                </React.Suspense>
            )}
        </div>
    );
}
