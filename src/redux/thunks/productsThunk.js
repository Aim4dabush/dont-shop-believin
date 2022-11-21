//actions
import { notifyActions } from "../slices/notifySlice";
import { productsActions } from "../slices/productsSlice";

export const getAllProducts = () => {
  return async (dispatch) => {
    await fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        dispatch(productsActions.setIsLoading(true));
        if (data) {
          dispatch(productsActions.setProductsReset());
          dispatch(productsActions.setProductsArr(data.products));
        }
        dispatch(productsActions.setIsLoading(false));
      })
      .catch((error) => {
        dispatch(
          notifyActions.setNotification({
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
    await fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(productsActions.setIsLoading(true));
        if (data) {
          dispatch(productsActions.setProductsReset());
          dispatch(productsActions.setProductsArr(data.products));
        }
        dispatch(productsActions.setIsLoading(false));
      })
      .catch((error) => {
        dispatch(
          notifyActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
        dispatch(productsActions.setIsLoading(false));
      });
  };
};
