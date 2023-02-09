import styles from "./title.module.css";

function Title({ children }) {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

export default Title;
