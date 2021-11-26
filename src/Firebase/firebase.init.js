import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInit = () => {
    initializeApp(firebaseConfig);
}

// const analytics = getAnalytics(app);
export default firebaseInit;