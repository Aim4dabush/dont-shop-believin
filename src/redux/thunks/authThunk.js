import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//actions
import { authActions } from "../slices/authSlice";
import { cartsActions } from "../slices/cartsSlice";
import { modalActions } from "../slices/modalSlice";
import { productsActions } from "../slices/productsSlice";

export const authLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("user", res.user.uid);
          res.user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
            dispatch(
              authActions.setUser({
                id: localStorage.getItem("user"),
                token: localStorage.getItem("token"),
              })
            );
          });
        }
      })
      .catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
  };
};

export const authLogout = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(authActions.setReset());
      dispatch(cartsActions.setShoppingDataReset());
      dispatch(cartsActions.setWishDataReset());
      dispatch(productsActions.setProductsReset());
      clearTimeout();
    });
  };
};
