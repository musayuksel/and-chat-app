// import firebase from "firebase/app";
// import "firebase/database";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZAc_X6amxa4YI0PW-fdPC831Z_PLDhhY",
//   authDomain: "and-chat-28576.firebaseapp.com",
//   databaseURL: "https://and-chat-28576-default-rtdb.firebaseio.com",
//   projectId: "and-chat-28576",
//   storageBucket: "and-chat-28576.appspot.com",
//   messagingSenderId: "751060701870",
//   appId: "1:751060701870:web:72da52fe0a5c543d2d133f",
// };

// firebase.initializeApp(firebaseConfig);
// const databaseRef = firebase.database().ref();
// export const andRef = databaseRef.child("AND chat");
// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZAc_X6amxa4YI0PW-fdPC831Z_PLDhhY",
  authDomain: "and-chat-28576.firebaseapp.com",
  databaseURL: "https://and-chat-28576-default-rtdb.firebaseio.com",
  projectId: "and-chat-28576",
  storageBucket: "and-chat-28576.appspot.com",
  messagingSenderId: "751060701870",
  appId: "1:751060701870:web:72da52fe0a5c543d2d133f",
};

// Initialize Firebaseß
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
