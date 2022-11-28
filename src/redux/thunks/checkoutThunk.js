import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

//actions
import { checkoutActions } from "../slices/checkoutSlice";
import { modalActions } from "../slices/modalSlice";

export const addCustomerOrder = (order) => {
  return async (dispatch) => {
    const collectionRef = collection(db, "order");

    await addDoc(collectionRef, order)
      .then((res) => {
        if (!res) {
          dispatch(
            modalActions.setNotification({
              status: "Error",
              message: "Something went wrong!",
              isShown: true,
            })
          );
        } else {
          dispatch(checkoutActions.setReceipt(res.id));
          dispatch(modalActions.setCheckout(true));
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

export const getCustomerOrder = (receipt) => {
  return (dispatch) => {
    const docRef = doc(db, `order/${receipt}`);

    onSnapshot(docRef, (res) => {
      if (res) {
        let info = res.data();
        dispatch(
          checkoutActions.setOrder({
            address: {
              street: info.address.street,
              city: info.address.city,
              state: info.address.state,
              zip: info.address.zip,
            },
            creditCard: {
              company: info.creditCard?.company,
              name: info.creditCard?.name,
              card: info.creditCard?.card,
              exp: info.creditCard?.exp,
            },
            email: info.email,
            fullName: info.fullName,
            items: info.items,
            receipt: res.id,
            total: info.total,
            user: info.user,
          })
        );
      }
    });
  };
};
