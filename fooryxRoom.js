
const firebaseConfig = {
  apiKey: "AIzaSyAe9j3ZvRZBmwb68Js6DaaEHJoOgG8FXPQ",
  authDomain: "vvalter-d8428.firebaseapp.com",
  databaseURL: "https://vvalter-d8428-default-rtdb.firebaseio.com",
  projectId: "vvalter-d8428",
  storageBucket: "vvalter-d8428.appspot.com",
  messagingSenderId: "432041605849",
  appId: "1:432041605849:web:d8e103f914f349508b9cc8",
  measurementId: "G-GJDNJFWW83"
};

firebase.initializeApp(firebaseConfig)

function addUser() {
var name = document.getElementById("username").value 
firebase.database().ref("/").child(name).update({


purpose: "add user"

})



}

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value



  firebase.database().ref("/").child(roomName).update({
    purpose : "add room"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "fooryxPage.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
console.log("nome " + roomNames)
row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)'>#"+ roomNames +"</div>"
document.getElementById("output").innerHTML += row;

//Fim do código
});});}
getData();

getData();

function redirectToRoomName(name)
{
  console.log("walt" + name);
  localStorage.setItem("roomName", name);
    window.location = "fooryxPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
