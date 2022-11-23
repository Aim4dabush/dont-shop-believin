import { useNavigate, NavLink } from "react-router-dom";

//components
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";

//styles
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={styles.card}>
      <ProductImage
        id={product?.id}
        image={product?.images[0]}
        title={product?.title}
      />
      <NavLink className={styles.title} to={`/products/${product.id}`}>
        {product?.title}
      </NavLink>
      <ProductInfo
        infoOne={product?.brand}
        infoTwo={`In Stock: ${product?.stock}`}
      />
      <ProductInfo
        infoOne={`Rating: ${product?.rating}`}
        infoTwo={`Price: $${product?.price}`}
      />
      <button className={styles.btn} onClick={onClickHandler}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
