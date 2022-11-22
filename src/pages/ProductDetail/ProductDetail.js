import { useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import DetailCard from "../../Components/ProductDetail/DetailCard/DetailCard";
import SimilarItems from "../../Components/ProductDetail/SimilarItems/SimilarItems";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../redux/slices/cartsSlice";

//styles
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.productsArr);

  const item = products.find((item) => {
    return item.id === parseInt(id);
  });

  useEffect(() => {
    dispatch(cartsActions.setProduct(item));
  }, [item, dispatch]);

  return (
    <div className={styles.container}>
      <DetailCard />
      <SimilarItems />
    </div>
  );
};

export default ProductDetail;
