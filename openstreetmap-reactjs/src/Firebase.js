import * as firebase from "firebase";

let config = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "868924858016"
};
firebase.initializeApp(config);

export default firebase;
