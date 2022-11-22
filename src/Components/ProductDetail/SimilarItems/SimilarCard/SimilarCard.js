//components
import { NavLink } from "react-router-dom";

//styles
import styles from "./SimilarCard.module.scss";

const SimilarCard = ({ id, image, price, rating, title }) => {
  return (
    <div className={styles.card}>
      <NavLink className={styles.imageWrapper} to={`/products/${id}`}>
        <img className={styles.image} src={image} alt={title} />
      </NavLink>
      <NavLink className={styles.title} to={`/products/${id}`}>
        <h4>{title}</h4>
      </NavLink>
      <div className={styles.infoWrapper}>
        <p>Rating: {rating}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default SimilarCard;
