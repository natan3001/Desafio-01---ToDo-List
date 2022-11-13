import { Trash } from "phosphor-react";
import { TaskProps } from "../App";

import styles from "./Task.module.css";

export function Task({ id, content, isDone }: TaskProps) {
  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" name="task-done" checked={isDone} />
        <span></span>
      </label>

      <p className={isDone ? styles.taskFinished : ""}>{content}</p>

      <button type="button">
        <Trash size={14} />
      </button>
    </div>
  );
}
