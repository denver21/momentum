const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `C:/Users/USER/Desktop/학업/개인/momentum/img/${chosenImage}`;

document.body.appendChild(bgImage);