import { db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

//actions
import { checkoutActions } from "../slices/checkoutSlice";
import { modalActions } from "../slices/modalSlice";

export const addCustomerOrder = (order) => {
  return async (dispatch) => {
    const collectionRef = collection(db, "order");

    await addDoc(collectionRef, order)
      .then((res) => {
        console.log(res);
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
