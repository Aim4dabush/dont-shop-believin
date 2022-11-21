//styles
import styles from "./Rating.module.scss";

const Rating = ({ onClickHandler, rating }) => {
  return (
    <li className={styles.rating}>
      <p className={styles.title} onClick={onClickHandler}>
        {rating}
      </p>
    </li>
  );
};

export default Rating;
