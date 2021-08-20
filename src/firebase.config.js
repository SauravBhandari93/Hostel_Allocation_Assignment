import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCYw1rEgrmwevxdBIhoqw8XzVEif8N001g",
    authDomain: "hostel-allocation-app-1f674.firebaseapp.com",
    projectId: "hostel-allocation-app-1f674"
  };
  
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;