
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB63J03vwg-g1BR2gEse3gW3OwV58bZgsk",
    authDomain: "kwitter-app-cddce.firebaseapp.com",
    databaseURL: "https://kwitter-app-cddce-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cddce",
    storageBucket: "kwitter-app-cddce.appspot.com",
    messagingSenderId: "150343884580",
    appId: "1:150343884580:web:f288886bf836592b9f9db1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    userName=document.getElementById("userName").value
    firebase.database().ref("/").child(userName).update({
        purpose:"you are awsome"
    })
    

}