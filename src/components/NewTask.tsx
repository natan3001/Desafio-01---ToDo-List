import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";

interface newTaskProps {
  onSubmit: (content: string) => void;
}

export function NewTask({ onSubmit }: newTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form className={styles.addNewTaskform} onSubmit={handleNewTaskSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Adiciona uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
