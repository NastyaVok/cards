import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class EditCardStore {
  editCardStore: boolean = false;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      editCardStore: observable,
      setEditCardStore: action,
      getEditCardStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getEditCardStore() {
    return this.editCardStore;
  }

  setEditCardStore = (edit: boolean) => {
    this.editCardStore = edit;
  };
}