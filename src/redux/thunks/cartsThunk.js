//firestore
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

//actions
import { cartsActions } from "../slices/cartsSlice";
import { modalActions } from "../slices/modalSlice";

export const addShoppingData = (user, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `shopping/${user}`);

    if (data.length !== 0) {
      await setDoc(docRef, { items: data }).catch((error) => {
        dispatch(
          modalActions.setNotification({
            status: "Error",
            message: error.message,
            isShown: true,
          })
        );
      });
    }
  };
};

export const addWishListData = (user, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `wish-list/${user}`);

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
    const docRef = doc(db, "shopping", user);

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

export const deleteWishListItem = (id, itemId) => {
  return async (dispatch) => {
    const docRef = doc(db, `wish-list/${id}/items/${itemId}`);

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
  return (dispatch) => {
    const itemsDoc = doc(db, `shopping/${user}`);
    onSnapshot(itemsDoc, (res) => {
      if (!res._document) {
        return;
      }
      const data = res.data();
      if (data.items.length !== 0) {
        dispatch(cartsActions.setShoppingCart(data.items));
      }
    });
  };
};

export const getWishList = (id) => {
  return (dispatch) => {
    const itemsRef = collection(db, `wish-list/${id}/items`);

    onSnapshot(itemsRef, (res) => {
      let arr = [];
      if (res.empty) {
        dispatch(cartsActions.setWish(arr));
      } else {
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(cartsActions.setWish(arr));
      }
    });
  };
};

export const getWishListSize = (id) => {
  return (dispatch) => {
    const itemsRef = collection(db, `wish-list/${id}/items`);

    onSnapshot(itemsRef, (res) => {
      if (res.empty) {
        dispatch(cartsActions.setWishSize(res.size));
      }
      dispatch(cartsActions.setWishSize(res.size));
    });
  };
};
