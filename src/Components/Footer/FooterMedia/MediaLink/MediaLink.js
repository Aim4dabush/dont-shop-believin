//styles
import styles from "./MediaLink.module.scss";

const MediaLink = ({ children, link }) => {
  return (
    <li className={styles.item}>
      <a className={styles.navLink} href={link}>
        {children}
      </a>
    </li>
  );
};

export default MediaLink;
