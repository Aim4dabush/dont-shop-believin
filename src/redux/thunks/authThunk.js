import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//actions
import { authActions } from "../slices/authSlice";
import { notifyActions } from "../slices/notifySlice";

export const authLogin = (email, password) => {
  return async (dispatch) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user) {
          localStorage.setItem("token", res.user.accessToken);
          dispatch(
            authActions.setUser({
              id: res.user.uid,
              token: localStorage.getItem("token"),
            })
          );
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

export const authLogout = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      localStorage.removeItem("token");
      dispatch(authActions.setReset());
      dispatch(
        notifyActions.setNotification({
          status: "Logout",
          message: "You have been logged out!",
          isShown: true,
        })
      );
    });
  };
};
