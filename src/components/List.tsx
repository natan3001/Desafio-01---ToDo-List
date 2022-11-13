import styles from "./List.module.css";

export function List({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className={styles.tasksInfo}>
        <div className={styles.count}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.count}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.taskList}>
        {children ? children : "Nada encontrado"}
      </div>
    </>
  );
}
