// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvxm97_z5AvSVB3oEBIhLvmoSLtNF4MPA",
  authDomain: "tileapp-fdde1.firebaseapp.com",
  projectId: "tileapp-fdde1",
  storageBucket: "tileapp-fdde1.appspot.com",
  messagingSenderId: "970190606939",
  appId: "1:970190606939:web:b2de9448099567d775e57e",
  measurementId: "G-BS5GGN3CCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const roomCode = "ABCD";

getCities(db);
// Get a list of cities from your database
async function getCities(db: Firestore) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}

export const handleGetData = async () => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA2",
    country: "USA",
  });
};

const unsub: Unsubscribe = onSnapshot(doc(db, "cities", "LA"), (doc) => {
  console.log("Current data: ", doc.data());
});
