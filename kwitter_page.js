var firebaseConfig = {
      apiKey: "AIzaSyBbbT0HgW32OKMDb7uoL8lQl5CLV_T17ow",
    authDomain: "kwitter-dd817.firebaseapp.com",
    databaseURL: "https://kwitter-dd817-default-rtdb.firebaseio.com",
    projectId: "kwitter-dd817",
    storageBucket: "kwitter-dd817.appspot.com",
    messagingSenderId: "992715878430",
    appId: "1:992715878430:web:616c269b55501107b1fe0f"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
       });
       document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
