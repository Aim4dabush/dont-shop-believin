//actions
import { notifyActions } from "../slices/notifySlice";
import { productsActions } from "../slices/productsSlice";

export const getAllProducts = () => {
  return async (dispatch) => {
    await fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(productsActions.setProductsReset());
          data.products.forEach((product) => {
            dispatch(productsActions.setProductsArr(product));
          });
        }
      })
      .catch((error) => {
        dispatch(
          notifyActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
  };
};

export const getProductByCategory = (category) => {
  return async (dispatch) => {
    await fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(productsActions.setProductsReset());
          data.products.forEach((product) => {
            dispatch(productsActions.setProductsArr(product));
          });
        }
      })
      .catch((error) => {
        dispatch(
          notifyActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
  };
};
