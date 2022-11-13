import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { List } from "./components/List";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";

interface TasksProps {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
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
      id: "12312354324",
      content: "Terminar essa todo list",
      isDone: false,
    },
  ]);

  function addNewTask(content: string) {
    const newTask: TasksProps = {
      id: uuidv4(),
      content: content,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  }

  function changeDoneStatus(id: string) {
    const tasksWithUpdatedOne = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    setTasks(tasksWithUpdatedOne);
  }

  function deleteTask(id: string) {
    const tasksWithDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithDeletedOne);
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
            return (
              <Task
                key={id}
                id={id}
                isDone={isDone}
                content={content}
                onCheckTask={changeDoneStatus}
                onDeleteTask={deleteTask}
              />
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
