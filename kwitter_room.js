
const firebaseConfig = {
      apiKey: "AIzaSyBoMODWmffZgf94S5fNrfb54WbShVaWyTg",
      authDomain: "kwitter-new-687e4.firebaseapp.com",
      databaseURL: "https://kwitter-new-687e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-687e4",
      storageBucket: "kwitter-new-687e4.appspot.com",
      messagingSenderId: "235254341508",
      appId: "1:235254341508:web:00f9310a3465d7ed2c87d1",
      measurementId: "G-TWHNMXE5BW"
    };
    firebase.initializeApp(firebaseConfig);

    userName=localStorage.getItem("userName");
    document.getElementById("userName").innerHTML="Welcome " + userName + "!";

    function addRoom(){
          roomName=document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({
                purpose:"adding room name"
          });
          localStorage.setItem("roomName", roomName);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("roomName", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}
