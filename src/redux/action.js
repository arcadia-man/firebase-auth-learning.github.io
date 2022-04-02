import * as type from "./actionType";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut ,signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";

const resisterStart = () => ({
    type: type.RESISTER_START,
})
const resisterSucces = (user) => ({
    type: type.RESISTER_SUCCESS,
    payload: user
})
const resisterFail = (error) => ({
    type: type.RESISTER_FAIL,
    payload: error
})

export const resisterInitiate = (email, password, displayname) => {
    return function (dispatch) {
        dispatch(resisterStart());
        createUserWithEmailAndPassword(auth, email, password, displayname).then(({ user }) => {
            dispatch(resisterSucces(user));
        }).catch((error) => dispatch(resisterFail(error.message)))

    }
}

const loginStart = () => ({
    type: type.LOGIN_START,
})
const loginSucces = (user) => ({
    type: type.LOGIN_SUCCESS,
    payload: user
})
const loginFail = (error) => ({
    type: type.LOGIN_FAIL,
    payload: error
})

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => { dispatch(loginSucces(user)); }).catch((error) => dispatch(loginFail(error.message)))
    }
}

const logoutStart = () => ({
    type: type.LOGOUT_START,
})
const logoutSucces = (user) => ({
    type: type.LOGOUT_SUCCESS,
    payload: user
})
const logoutFail = (error) => ({
    type: type.LOGOUT_FAIL,
    payload: error
})

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        signOut(auth).then((res) => { dispatch(logoutSucces(res)); }).catch((error) => dispatch(logoutFail(error.message)))

    }
}

export const setUser = (user)=>({
    type: type.SET_USER,
    payload: user
});

const googleLoginStart = () => ({
    type: type.GOOGLE_SIGNIN_START,
})
const googleLoginSucces = (user) => ({
    type: type.GOOGLE_SIGNIN_SUCCESS,
    payload: user
})
const googleLoginFail = (error) => ({
    type: type.GOOGLE_SIGNIN_FAIL,
    payload: error
});

export const googleLoginInitiate = () => {
    const googleAuthprovider = new GoogleAuthProvider();
    return function (dispatch) {
        dispatch(googleLoginStart());
        signInWithPopup(auth, googleAuthprovider).then(({ user }) => {
            dispatch(googleLoginSucces(user));
        }).catch((error) => dispatch(googleLoginFail(error.message)))

    }
}

const googleVerifyStart = () => ({
    type: type.GOOGLE_VERIFICATION_START,
})
const googleVerifySucces = () => ({
    type: type.GOOGLE_VERIFICATION_SUCCESS,
})
const googleVerifyFail = (error) => ({
    type: type.GOOGLE_VERIFICATION_FAIL,
    payload: error
});

export const googleverificationInitiate = (email) => {
    return function (dispatch) {
        dispatch(googleVerifyStart());
        sendPasswordResetEmail(auth, email).then((res) => {
            dispatch(googleVerifySucces());
        }).catch((error) => dispatch(googleVerifyFail(error.message)))
    }
}


const facebookLoginStart = () => ({
    type: type.FACEBOOK_SIGNIN_START,
})
const facebookLoginSucces = (user) => ({
    type: type.FACEBOOK_SIGNIN_SUCCESS,
    payload: user
})
const facebookLoginFail = (error) => ({
    type: type.FACEBOOK_SIGNIN_FAIL,
    payload: error
});

export const facebookLoginInitiate = () => {
    const facebookAuthProvider = new FacebookAuthProvider();
    return function (dispatch) {
        dispatch(facebookLoginStart());
        signInWithPopup(auth, facebookAuthProvider).then(({ user }) => {
            dispatch(facebookLoginSucces(user));
        }).catch((error) => dispatch(facebookLoginFail(error.message)))

    }
}
