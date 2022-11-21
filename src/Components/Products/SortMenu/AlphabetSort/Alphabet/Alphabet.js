//styles
import styles from "./Alphabet.module.scss";

const Alphabet = ({ alphabet, onClickHandler }) => {
  return (
    <li className={styles.alphabet}>
      <p className={styles.title} onClick={onClickHandler} title={alphabet}>
        {alphabet}
      </p>
    </li>
  );
};

export default Alphabet;
