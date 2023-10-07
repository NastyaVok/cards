import './index.scss';
import { Header } from '../pages/HeaderPage';
import { TaskListPage } from '../pages/TasksListPage';

export const App = () => {

  return (
    <>
      <Header />
      <TaskListPage />
    </>
  );
};
