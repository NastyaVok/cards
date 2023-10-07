import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class CreateNewTaskStore {
  createNewTaskStore: boolean = false;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      createNewTaskStore: observable,
      setcreateNewTaskStore: action,
      getcreateNewTaskStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getcreateNewTaskStore() {
    return this.createNewTaskStore;
  }

  setcreateNewTaskStore = (edit: boolean) => {
    this.createNewTaskStore = edit;
  };
}