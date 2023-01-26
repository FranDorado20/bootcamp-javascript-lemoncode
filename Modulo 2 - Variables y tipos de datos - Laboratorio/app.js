var hotel = {
  name: "W Barcelona",
  location: "Barcelona",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/94/fd/b6/exterior-mediterranean.jpg?w=1200&h=-1&s=1",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;
var rating = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = rating + " estrellas";
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
