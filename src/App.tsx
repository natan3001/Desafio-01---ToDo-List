import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { List } from "./components/List";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";

export interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: "12312354354",
      content: "Comprar um pizza de pepperoni",
      isDone: true,
    },
    {
      id: "13215468798",
      content: "Fazer um café TOP",
      isDone: false,
    },
    {
      id: "12312354354",
      content: "Terminar esse todo list",
      isDone: false,
    },
  ]);

  function addNewTask(content: string) {
    const newTask: TaskProps = {
      id: uuidv4(),
      content: content,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  }

  const createdTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone === true).length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onSubmit={addNewTask} />
        <List createdTasks={createdTasks} doneTasks={doneTasks}>
          {tasks.map(({ id, isDone, content }) => {
            return <Task key={id} id={id} isDone={isDone} content={content} />;
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
