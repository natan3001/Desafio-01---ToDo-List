import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { List } from "./components/List";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
        <List>
          <Task />
          <Task />
          <Task />
          <Task />
        </List>
      </div>
    </div>
  );
}

export default App;
