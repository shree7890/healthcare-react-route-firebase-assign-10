import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const intitiallizeAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default intitiallizeAuthentication;
