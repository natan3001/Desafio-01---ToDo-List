import styles from "./Header.module.css";

import logo from "./../assets/todo-list.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="ToDo list logo" />
    </header>
  );
}
