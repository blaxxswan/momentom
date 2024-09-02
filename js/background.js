const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const chosedImages = images[Math.floor(Math.random() * images.length)];

console.log(chosedImages);

const bgImage = document.createElement('img');
bgImage.src = `img/${chosedImages}`;

console.log(bgImage);

document.body.appendChild(bgImage);
