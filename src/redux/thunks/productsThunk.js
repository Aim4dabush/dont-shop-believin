//actions
import { modalActions } from "../slices/modalSlice";
import { productsActions } from "../slices/productsSlice";

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(productsActions.setIsLoading(true));
    await fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(productsActions.setProductsArr(data.products));
        }
        dispatch(productsActions.setIsLoading(false));
      })
      .catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
        dispatch(productsActions.setIsLoading(false));
      });
  };
};

export const getProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch(productsActions.setIsLoading(true));
    await fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(productsActions.setProductsArr(data.products));
        }
        dispatch(productsActions.setIsLoading(false));
      })
      .catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
        dispatch(productsActions.setIsLoading(false));
      });
  };
};
