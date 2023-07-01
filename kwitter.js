function addRoom(){
      room_name=document.EllementById("room-name");
      localStorage.setItem(room_name);
      function getData() {
          firebase.database().ref("/").on('value',

           function(snapshot) {
            document.getElementById("output").innerHTML ="";snapshot.forEach
           (function(childSnapshot)
            {  childKey = childSnapshot.key;
               Room_names = childKey;
//Start code
row="<div class='room' id="+roomname+" onclick='addRoom(this.id')>#"+roomname+"</div><hr>";
//End code
});});}
getData();
}