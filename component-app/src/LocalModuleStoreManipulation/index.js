import React from 'react';
import {DynamicModuleLoader} from "redux-dynamic-modules";

import {stepsModule} from "./store";
import {LocalModuleStoreManipulation} from "./LocalModuleStoreManipulation";

export default () => {
    return (
        <DynamicModuleLoader modules={[stepsModule]}>
            <LocalModuleStoreManipulation/>
        </DynamicModuleLoader>
    )
}