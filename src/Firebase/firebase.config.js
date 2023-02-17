/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcf0ofENqrl53U4wieFuwEx4ZauaTPrbw",
  authDomain: "job-finder-37ed5.firebaseapp.com",
  projectId: "job-finder-37ed5",
  storageBucket: "job-finder-37ed5.appspot.com",
  messagingSenderId: "354525974807",
  appId: "1:354525974807:web:db47116525791b51b62752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app