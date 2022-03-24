import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnT1a8DuEOiBiYZHbVqfGV6uR8jKF1SP8",
  authDomain: "housing-society-85753.firebaseapp.com",
  databaseURL: "https://housing-society-85753-default-rtdb.firebaseio.com",
  projectId: "housing-society-85753",
  storageBucket: "housing-society-85753.appspot.com",
  messagingSenderId: "1030324798610",
  appId: "1:1030324798610:web:7a14c3aa6c71ff0e37524b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
