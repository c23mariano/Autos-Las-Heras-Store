// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhaOH_N_GZzElt8LMlkpy9fNNn5TOuTco",
    authDomain: "autos-las-heras-store.firebaseapp.com",
    projectId: "autos-las-heras-store",
    storageBucket: "autos-las-heras-store.appspot.com",
    messagingSenderId: "559607863942",
    appId: "1:559607863942:web:622dd92ab2d8a05b004f07",
    measurementId: "G-0J1LGYW5JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);