//components
import CartImage from "./CartImage/CartImage";
import CartQuantity from "./CartQuantity/CartQuantity";
import { FaTrashAlt } from "react-icons/fa";

//styles
import styles from "./CartCard.module.scss";

const CartCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <CartImage image={product.image} title={product.title} />
      <div className={styles.mainWrapper}>
        <h2>{product.title}</h2>
        <div className={styles.infoWrapper}>
          <p>Price: ${product.price}</p>
          <CartQuantity title={product.title} />
          <p>Subtotal: ${product.subTotal}</p>
        </div>
        <button className={styles.btn}>
          <FaTrashAlt /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
