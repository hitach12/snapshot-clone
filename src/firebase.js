import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage'; 



const firebaseConfig = {
  apiKey: "AIzaSyD9wUjbulIMab-IZ2m-079VSTYlRajd_pU",
  authDomain: "snapshot-clone-4255b.firebaseapp.com",
  projectId: "snapshot-clone-4255b",
  storageBucket: "snapshot-clone-4255b.appspot.com",
  messagingSenderId: "466968359388",
  appId: "1:466968359388:web:b7c6484da8b39a61c59f19",
  measurementId: "G-JK8TNQB64J"
};
  

// const firebaseApp = 
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();
var auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {db , auth , provider ,storage };