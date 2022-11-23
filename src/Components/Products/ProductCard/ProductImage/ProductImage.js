import { NavLink } from "react-router-dom";

//styles
import styles from "./ProductImage.module.scss";

const ProductImage = ({ id, image, title }) => {
  return (
    <NavLink className={styles.imageWrapper} to={`products/${id}`}>
      <img className={styles.image} src={image} alt={title} />
    </NavLink>
  );
};

export default ProductImage;
