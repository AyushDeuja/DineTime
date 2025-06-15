import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../store/restaurants";
import { db } from "./firebaseConfig";

const restaurantData = slots;

const uploadData = async () => {
  try {
    for (let i = 0; i < restaurantData.length; i++) {
      const restaurant = restaurantData[i];
      const docRef = doc(collection(db, "slots"), `slot_${i + 1}`);
      await setDoc(docRef, restaurant);
    }
    console.log("Data Uploaded");
  } catch (err) {
    console.log("Error uploading data:", err);
  }
};

export default uploadData;
