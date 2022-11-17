import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

//actions
import { notifyActions } from "../slices/notifySlice";

export const newUserRegistration = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user) {
          dispatch(
            notifyActions.setNotification({
              status: "Success",
              message: "Account has been created!",
              isShown: true,
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
