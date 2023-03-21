
const getimg = document.querySelector(".get-image");

const addimg = document.createElement("img");
addimg.src = getimg.src;

addimg.style.cssText = `z-index: 10000;`;

document.body.appendChild(addimg);
