 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth' 
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZYHkSQ-4YpMx47whx1HYmQL7LndBcyDc",
    authDomain: "net-mario-plan.firebaseapp.com",
    databaseURL: "https://net-mario-plan.firebaseio.com",
    projectId: "net-mario-plan",
    storageBucket: "",
    messagingSenderId: "748155221532",
    appId: "1:748155221532:web:2c1ccbee5739951d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true });
