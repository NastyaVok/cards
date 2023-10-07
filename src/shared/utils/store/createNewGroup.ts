import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class CreateNewGroupStore {
  createNewGroupStore: boolean = false;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      createNewGroupStore: observable,
      setCreateNewGroupStore: action,
      getCreateNewGroupStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getCreateNewGroupStore() {
    return this.createNewGroupStore;
  }

  setCreateNewGroupStore = (edit: boolean) => {
    this.createNewGroupStore = edit;
  };
}