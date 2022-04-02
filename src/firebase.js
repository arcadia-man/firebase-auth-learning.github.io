// 1. initializing the app by providing configuration obtained from firebase app account and getauth to initiate authentication system in our app. we will pass our app through the getauth function. we export whenever or whereever needs but export dfault the app.
import {initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPjiIOsg9vOgPsgVi38TpahBlitOZu7Cs",
    authDomain: "fir-auth-2a2e9.firebaseapp.com",
    projectId: "fir-auth-2a2e9",
    storageBucket: "fir-auth-2a2e9.appspot.com",
    messagingSenderId: "242354793884",
    appId: "1:242354793884:web:aa105518e0a66566ae6c59"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;