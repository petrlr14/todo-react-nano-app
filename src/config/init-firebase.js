import * as firebase from "firebase/app";

let firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.SENDER,
    appId: process.env.API_ID
  };

class Firebase{
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}

export default Firebase;