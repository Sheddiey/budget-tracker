// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC2Ve7WxHuR4Tt1CJYFkNH7SNS3ibHeMA8",
    authDomain: "budget-tracker-ac7ef.firebaseapp.com",
    projectId: "budget-tracker-ac7ef",
    storageBucket: "budget-tracker-ac7ef.appspot.com",
    messagingSenderId: "339151636749",
    appId: "1:339151636749:web:be75de79065e848d4f8844",
    measurementId: "G-W0E15K5VXW"
  };
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;