import logo from "../../images/logo.svg";
import styles from "./index.module.css";

export function Logo() {
  return <img src={logo} className={styles.AppLogo} alt="logo" />;
}