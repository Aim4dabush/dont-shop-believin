//components
import ItemImage from "./ItemImage/ItemImage";

//styles
import styles from "./ItemCard.module.scss";

const ItemCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <ItemImage image={product.image} title={product.title} />
      <div className={styles.mainWrapper}>
        <h3>{product.title}</h3>
        <div className={styles.infoWrapper}>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ${product.price}</p>
          <p>SubTotal: ${product.subTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
