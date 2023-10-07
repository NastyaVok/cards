import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class CardIdStore {
  cardId: number = 0;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      cardId: observable,
      setCardId:action,
      getCardId: computed,
    });
    this.rootStore = rootStore;
  }

  get getCardId() {
    return this.cardId;
  }

  setCardId = (id: number) => {
    this.cardId = id;
  };
}