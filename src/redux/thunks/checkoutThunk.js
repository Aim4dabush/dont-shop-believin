import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

//actions
import { checkoutActions } from "../slices/checkoutSlice";
import { modalActions } from "../slices/modalSlice";
