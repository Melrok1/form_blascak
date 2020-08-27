import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBziOhZt3yXH1IwAH6LV9UMG2RyuF-nIYg",
  authDomain: "form-blascak.firebaseapp.com",
  databaseURL: "https://form-blascak.firebaseio.com",
  projectId: "form-blascak",
  storageBucket: "gs://form-blascak.appspot.com",
  // storageBucket: "form-blascak.appspot.com",
  messagingSenderId: "1011356002503",
  appId: "1:1011356002503:web:849c511471411b416ab6e2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;