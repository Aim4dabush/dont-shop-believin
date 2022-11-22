import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

//actions
import { modalActions } from "../slices/modalSlice";

export const newUserRegistration = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user) {
          dispatch(
            modalActions.setNotification({
              status: "Success",
              message: "Account has been created!",
              isShown: true,
            })
          );
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
