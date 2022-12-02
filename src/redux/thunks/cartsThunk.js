//firestore
import { db } from "../../firebase/firebaseConfig";
import { deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";

//actions
import { cartsActions } from "../slices/cartsSlice";
import { modalActions } from "../slices/modalSlice";

export const addShoppingData = (user, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `shopping/${user}`);
    if (data.length === 0) {
      await deleteDoc(docRef).catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
    }

    await setDoc(docRef, { items: data }).catch((error) => {
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

export const addWishListData = (user, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `wish-list/${user}`);
    if (data.length === 0) {
      await deleteDoc(docRef).catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
    }

    await setDoc(docRef, { items: data }).catch((error) => {
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

export const deleteShoppingCart = (user) => {
  return async (dispatch) => {
    const docRef = doc(db, `shopping/${user}`);

    await deleteDoc(docRef).catch((error) => {
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

export const deleteWishCart = (user) => {
  return async (dispatch) => {
    const docRef = doc(db, "wish-list", user);

    await deleteDoc(docRef).catch((error) => {
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

export const getShoppingCart = (user) => {
  return async (dispatch) => {
    const itemsDoc = doc(db, `shopping/${user}`);
    onSnapshot(itemsDoc, (res) => {
      let data = null;
      if (res._document) {
        data = res.data();
        if (data.items.length === 0) {
          dispatch(cartsActions.setShoppingCart([]));
        } else {
          dispatch(cartsActions.setShoppingCart(data.items));
        }
      }
    });
  };
};

export const getWishList = (user) => {
  return (dispatch) => {
    const itemsRef = doc(db, `wish-list/${user}`);

    onSnapshot(itemsRef, (res) => {
      const data = res.data();
      if (data.items.length === 0) {
        dispatch(cartsActions.setWishCart([]));
      } else {
        dispatch(cartsActions.setWishCart(data.items));
      }
    });
  };
};
