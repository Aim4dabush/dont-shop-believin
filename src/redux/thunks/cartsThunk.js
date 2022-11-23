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

export const addShoppingData = (id, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `shopping/${id}/items/${data.id}`);

    await setDoc(docRef, data).catch((error) => {
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

export const addWishListData = (id, data) => {
  return async (dispatch) => {
    const docRef = doc(db, `wish-list/${id}/items/${data.id}`);

    await setDoc(docRef, data).catch((error) => {
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

export const getShoppingCart = (id) => {
  return (dispatch) => {
    const itemsRef = collection(db, `shopping/${id}/items`);

    onSnapshot(itemsRef, (res) => {
      if (res.empty) {
        return;
      }
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ ...doc.data() });
      });
      dispatch(cartsActions.setShopping(arr));
    });
  };
};

export const getShoppingSize = (id) => {
  return (dispatch) => {
    const itemsRef = collection(db, `shopping/${id}/items`);

    onSnapshot(itemsRef, (res) => {
      if (res.empty) {
        return;
      }

      dispatch(cartsActions.setShoppingSize(res.size));
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
