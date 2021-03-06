// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
	apiKey: "AIzaSyDX-1QrKpmsuRbsIga5ddlsKRYSyOPr5-k",
	authDomain: "slack-clone-81ebf.firebaseapp.com",
	projectId: "slack-clone-81ebf",
	storageBucket: "slack-clone-81ebf.appspot.com",
	messagingSenderId: "86823890674",
	appId: "1:86823890674:web:2cb7663cc9e6cce6dfea6b",
	measurementId: "G-S4Z95HSTTG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();

export { auth, Provider, db };