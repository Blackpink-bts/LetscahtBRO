const firebaseConfig = {
    apiKey: "AIzaSyA1vkoYdTcGPkJWgvlzbIGSxwRVUkKkJF0",
    authDomain: "letschatbesite.firebaseapp.com",
    databaseURL: "https://letschatbesite-default-rtdb.firebaseio.com",
    projectId: "letschatbesite",
    storageBucket: "letschatbesite.appspot.com",
    messagingSenderId: "52403882365",
    appId: "1:52403882365:web:0195fa0a07b7d35e662414",
    measurementId: "G-L37JHRHVXW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}