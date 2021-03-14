import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB2Td6SxP_bzq00SosPrx5ya1VeStWwsAE",
  authDomain: "facebook-clone-3a83e.firebaseapp.com",
  projectId: "facebook-clone-3a83e",
  storageBucket: "facebook-clone-3a83e.appspot.com",
  messagingSenderId: "867134861791",
  appId: "1:867134861791:web:4ad337e0c133878eba546a",
  measurementId: "G-Z0WF4PSTZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
