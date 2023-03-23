const marker = document.getElementById("stop-marker");
let car = document.getElementById("car");
const redLight = document.querySelector("#red");
const yellowLight = document.querySelector("#yellow");
const greenLight = document.querySelector("#green");

//Traffic Light
let currentLight = "red";

function updateTrafficLight() {
  switch (currentLight) {
    case "red":
      redLight.style.opacity = 1;
      yellowLight.style.opacity = 0.3;
      greenLight.style.opacity = 0.3;
      setTimeout(() => {
        currentLight = "green";
        updateTrafficLight();
      }, 2000);
      break;
    case "yellow":
      redLight.style.opacity = 0.3;
      yellowLight.style.opacity = 1;
      greenLight.style.opacity = 0.3;
      setTimeout(() => {
        currentLight = "red";
        updateTrafficLight();
      }, 1000); //2000
      break;
    case "green":
      redLight.style.opacity = 0.3;
      yellowLight.style.opacity = 0.3;
      greenLight.style.opacity = 1;
      setTimeout(() => {
        currentLight = "yellow";
        updateTrafficLight();
      }, 2000); //5000
      break;
    default:
      break;
  }
}

// Start the traffic light
updateTrafficLight();

//Car
let position = 0;
let speed = 1;
let moveCar = setInterval(() => {
  if (currentLight == "green") {
    position += speed;
    car.style.left = `${position}px`;
    if (position >= window.innerWidth + 200) {
      position = -200;
    }
  } else if (currentLight == "red" || currentLight == "yellow") {
    var currentPos = parseFloat(car.style.left);
    var targetPos = marker.offsetLeft - car.offsetWidth;
    if (currentPos < targetPos) {
      position += speed;
      car.style.left = `${position}px`;
    } else if (currentPos > targetPos) {
      position += speed;
      car.style.left = `${position}px`;
      if (position >= window.innerWidth + 200) {
        position = -200;
      }
    }
  }
}, 1);

moveCar();
