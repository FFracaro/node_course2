const paragrafos = document.querySelectorAll(".paragrafos p");

const bodyStyle = getComputedStyle(document.body);
const backgroundColourBody = bodyStyle.backgroundColor;

console.log(backgroundColourBody)

console.log(paragrafos);

paragrafos.forEach((element) => {
    element.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    element.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

})