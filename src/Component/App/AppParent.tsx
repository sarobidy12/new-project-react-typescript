import React, { FC } from 'react';
import { AppStoreInterface } from "../../Store/AppStore";
import { inject, observer } from 'mobx-react';


interface IApp {
    AppStore: AppStoreInterface
}


const AppParent: FC<IApp> = ({ AppStore }) => {
    return (
        <div>
            test:   {AppStore.testValue}
            <br />

        </div>
    );
}

export default inject('AppStore')(observer(AppParent));
