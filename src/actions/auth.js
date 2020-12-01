import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
        //we want users to sign into the system via a pop-up window, and use their
        //google account to log-in
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    //console.log("Start logout");
    return () => {
        return firebase.auth().signOut();
    };
};
