import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics'

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBtYmRWqstDWBDyPEOhdB2SdD6GVhZFb_0",
    authDomain: "goshare-sa.firebaseapp.com",
    projectId: "goshare-sa",
    storageBucket: "goshare-sa.appspot.com",
    messagingSenderId: "926309159692",
    appId: "1:926309159692:web:84e494d9accffa683e2f29",
    measurementId: "G-HS4Q6CFTJ2"
});

// Initialize Firebase
var db = firebaseApp.firestore();
//firebase.initializeApp(firebaseConfig);
firebase.analytics();
export { db };