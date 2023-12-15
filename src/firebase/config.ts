// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    MESSAGIN_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
}=process.env

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: "thomas-rey-portfolio.appspot.com",
  messagingSenderId: MESSAGIN_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)