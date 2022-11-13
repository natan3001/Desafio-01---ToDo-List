import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, content, isDone, onCheckTask, onDeleteTask }: TaskProps) {
  function handleCheckTask() {
    onCheckTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" name="task-done" checked={isDone} onChange={handleCheckTask} />
        <span></span>
      </label>

      <p className={isDone ? styles.taskFinished : ""}>{content}</p>

      <button type="button" onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
