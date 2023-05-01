import styles from "./index.module.css";

export function Button({children}) {
  function consologar() {
    console.log("Clicaram em mim!")
  }
  return (
    <button className={styles.btn} onClick={consologar}>
      {children}
    </button>
  );
}