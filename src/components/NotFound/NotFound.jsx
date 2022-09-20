import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFound__title}>Вы попали в бездну отчаяния</h2>
      <Link to={"/"}>
        <button className={styles.notFound__button}>Назад в светлое будущее</button>
      </Link>
    </div>
  );
}
