const color = document.getElementById("color");
const place = document.getElementById("place");
const ritual = document.getElementById("ritual");

const showColor = () => {
  alert("Green!");
};

color.addEventListener("click", showColor);

const showPlace = () => {
  alert("Home!");
};

place.addEventListener("click", showPlace);

const showRitual = () => {
  alert("Listening to LoFi music while coding!");
};

ritual.addEventListener("click", showRitual);
