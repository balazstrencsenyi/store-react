// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7Doy1PiZTc-To1f1QlSXxbtM0EyQjQc",
  authDomain: "store-react-4c5a7.firebaseapp.com",
  projectId: "store-react-4c5a7",
  storageBucket: "store-react-4c5a7.appspot.com",
  messagingSenderId: "477725858659",
  appId: "1:477725858659:web:c67758a09041f965f1d156",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
