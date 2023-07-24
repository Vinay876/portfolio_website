
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDa9YfUkOx1QsxiKvy1Vzj4sjb5mvDPzjQ",
  authDomain: "react-portfolio-dashboar-d61a9.firebaseapp.com",
  projectId: "react-portfolio-dashboar-d61a9",
  storageBucket: "react-portfolio-dashboar-d61a9.appspot.com",
  messagingSenderId: "964909295413",
  appId: "1:964909295413:web:7fb70b8c1cd28e2a0ece7c",
  measurementId: "G-C3RXDDP0NZ"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
