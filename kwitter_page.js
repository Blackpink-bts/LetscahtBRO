const firebaseConfig = {
    apiKey: "AIzaSyC1ElHYTE4VBls9sEBm7YtGdg2pLtPs5OY",
    authDomain: "kwitter-c36f0.firebaseapp.com",
    databaseURL: "https://kwitter-c36f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-c36f0",
    storageBucket: "kwitter-c36f0.appspot.com",
    messagingSenderId: "1064987014967",
    appId: "1:1064987014967:web:bfc1c513a6d21492160cb2",
    measurementId: "G-GJ8Y0YD3B2"
  };
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message = message_data['message'];
like = message_data['like'];
name = message_data['name'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
  message:msg,
  like:0
});
onsole.log(firebase_message_id);
console.log(message_data);
message = message_data['message'];
like = message_data['like'];
name = message_data['name'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
}
function updateLike(message_id){
    console.log("clicked in like button - "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}