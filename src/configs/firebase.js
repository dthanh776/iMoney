// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {
    serverTimestamp,
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwdOmEDbLIYRZdTxo3aB3UOySynCzWkq8",
    authDomain: "imoney-3aaf4.firebaseapp.com",
    projectId: "imoney-3aaf4",
    storageBucket: "imoney-3aaf4.appspot.com",
    messagingSenderId: "187099150503",
    appId: "1:187099150503:web:612adca7befdd992470382",
    measurementId: "G-5S6E40N4Z6",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp();
const refStore = ref;

export {
    db,
    auth,
    timestamp,
    storage,
    uploadBytes,
    refStore,
    getDownloadURL,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    collection,
    addDoc,
};
