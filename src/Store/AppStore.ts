import { action, makeObservable, observable, runInAction } from 'mobx';

export interface AppStoreInterface {
    testValue: string;
    dataSelected: any;
    setdataSelected: (data: any) => void;
}

class AppStore implements AppStoreInterface {

    @observable testValue = "test";

    @observable dataSelected: any;


    constructor() {
        makeObservable(this);
    }

    @action setdataSelected = (data: any) => {
        this.dataSelected = data;
    };

}

export default new AppStore();
