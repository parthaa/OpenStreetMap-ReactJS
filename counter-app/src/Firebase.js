import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyDyGh5n97Mbn_6r5j5TUZwB1m-75r8E7WI",
  authDomain: "downloadinnovation2018.firebaseapp.com",
  databaseURL: "https://downloadinnovation2018.firebaseio.com",
  projectId: "downloadinnovation2018",
  storageBucket: "downloadinnovation2018.appspot.com",
  messagingSenderId: "868924858016"
};
firebase.initializeApp(config);

export default firebase;
