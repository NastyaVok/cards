import { EditCardStore } from './editCardStore';
import { CardIdStore } from './cardIdStore';
import { CreateNewGroupStore } from './createNewGroup';
import { CreateNewTaskStore } from './createNewTask';

export interface IRootStore {
  cardId: CardIdStore;
  editCardStore: EditCardStore;
  createNewGroupStore: CreateNewGroupStore;
  createNewTaskStore: CreateNewTaskStore;
};

export class RootStore implements IRootStore {
  cardId: CardIdStore;
  editCardStore: EditCardStore;
  createNewGroupStore: CreateNewGroupStore;
  createNewTaskStore: CreateNewTaskStore;

  constructor() {
    this.cardId = new CardIdStore(this);
    this.editCardStore = new EditCardStore(this);
    this.createNewGroupStore = new CreateNewGroupStore(this);
    this.createNewTaskStore = new CreateNewTaskStore(this);
  }
}
