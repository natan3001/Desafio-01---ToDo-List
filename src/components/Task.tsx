import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox}>
        <input type="checkbox" name="task-done" />
        <span></span>
      </label>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima
        dolore culpa eaque nemo qui.
      </p>

      <button type="button">
        <Trash size={14} />
      </button>
    </div>
  );
}
