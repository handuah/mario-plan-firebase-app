 import firebase from 'firebase/app'
 import firestore from 'firebase/firestore'
 import 'firebase/auth' 
  
  
  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyDZYHkSQ-4YpMx47whx1HYmQL7LndBcyDc",
    authDomain: "net-mario-plan.firebaseapp.com",
    databaseURL: "https://net-mario-plan.firebaseio.com",
    projectId: "net-mario-plan",
    storageBucket: "",
    messagingSenderId: "748155221532",
    appId: "1:748155221532:web:2c1ccbee5739951d"
  };


  //Initialize Firebase;
  firebase.initializeApp(config);
  export var todosRef = firebase.firestore();
  // firebase.firestore().settings({ timestampsInSnapshots : true });


  export default firebase
