import { useState } from "react";

//components
import WishButtons from "./WishButtons/WishButtons";
import WishImage from "./WishImage/WishImage";
import WishQuantity from "./WishQuantity/WishQuantity";

//styles
import styles from "./WishCard.module.scss";

const WishCard = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);

  return (
    <div className={styles.card}>
      <WishImage image={product.image} title={product.title} />
      <div className={styles.mainWrapper}>
        <h2>{product.title}</h2>
        <div className={styles.infoWrapper}>
          <p>Rating: {product.rating}</p>
          <p>Price: ${product.price}</p>
          <WishQuantity
            quantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            title={product.title}
          />
        </div>
        <WishButtons product={product} quantity={itemQuantity} />
        <p className={styles.date}>
          Added: {product.date.month}/{product.date.day}/{product.date.year}
        </p>
      </div>
    </div>
  );
};

export default WishCard;
