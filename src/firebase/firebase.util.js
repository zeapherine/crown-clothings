import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAJwh343ldh2hFEzCWFF2xxq-BhK5vDaeM",
	authDomain: "crown-db-ba290.firebaseapp.com",
	databaseURL: "https://crown-db-ba290.firebaseio.com",
	projectId: "crown-db-ba290",
	storageBucket: "crown-db-ba290.appspot.com",
	messagingSenderId: "1009652169405",
	appId: "1:1009652169405:web:d3f01bf4ab07516d0495d4",
	measurementId: "G-XZDJMZ49E1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
