import styles from "./index.module.css";

export function Button({children}) {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
}