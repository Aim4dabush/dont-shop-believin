import { useState } from "react";

//components
import CartButtons from "./CartButtons/CartButtons";
import CartImage from "./CartImage/CartImage";
import CartQuantity from "./CartQuantity/CartQuantity";

//styles
import styles from "./CartCard.module.scss";

const CartCard = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);

  return (
    <div className={styles.card}>
      <CartImage image={product.image} title={product.title} />
      <div className={styles.mainWrapper}>
        <h2>{product.title}</h2>
        <div className={styles.infoWrapper}>
          <p>Price: ${product.price}</p>
          <CartQuantity
            quantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            title={product.title}
          />
          <p>Subtotal: ${product.subTotal}</p>
        </div>
        <CartButtons product={product} quantity={itemQuantity} />
      </div>
    </div>
  );
};

export default CartCard;
