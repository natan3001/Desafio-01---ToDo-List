import styles from "./List.module.css";

interface listProps {
  createdTasks: number;
  doneTasks: number;
  children: JSX.Element[];
}

export function List({ createdTasks, doneTasks, children }: listProps) {
  return (
    <>
      <div className={styles.tasksInfo}>
        <div className={styles.count}>
          <strong>Tarefas criadas</strong>
          <span>{createdTasks}</span>
        </div>

        <div className={styles.count}>
          <strong>Concluídas</strong>
          <span>
            {doneTasks > 0 ? `${doneTasks} de ${createdTasks}` : doneTasks}
          </span>
        </div>
      </div>

      <div className={styles.taskList}>
        {children.length > 0 ? children : "Nada encontrado"}
      </div>
    </>
  );
}
