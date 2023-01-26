var hoteles = {
  W: {
    name: " W ",
    location: "Barcelona",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/94/fd/b6/exterior-mediterranean.jpg?w=1200&h=-1&s=1",
  },
  Màgic: {
    name: " Màgic",
    location: "Andorra",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/bc/64/ef/photo0jpg.jpg?w=1200&h=-1&s=1",
  },
};

var selecteHotel = prompt("Indica el nombre del hotel: W Barcelona o Màgic");

document.getElementById("name-hotel").innerHTML =
  "Hotel" + hoteles[selecteHotel].name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selecteHotel]["location"];
document.getElementById("img-hotel").src = hoteles[selecteHotel].img;

var stars = {
  una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("¿Cuántas estrellas?: una, dos, tres, cuatro o cinco");

document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;
