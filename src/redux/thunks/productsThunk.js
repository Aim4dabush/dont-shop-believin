//actions
import { productsActions } from "../slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    await fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.products.forEach((product) => {
          dispatch(productsActions.setProductsArr(product));
        });
      });
  };
};
