const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");
const colorContainer = document.querySelector(".color-container");
const colorArray = ["#267BD1", "#F56147", "#1BDA27", "#000000"];
const clearBtn = document.querySelector(".clear");
let isMouseDown = false;
let currentColor = colorArray[0];
// let x = 20;
// let y = 20;

const draw = (e) => {
  const rect = canvas.getBoundingClientRect();
  context.lineWidth = 3;
  context.lineCap = "round"; //Rounded paint brush
  context.strokeStyle = currentColor;
  context.lineTo(e.pageX - rect.left, e.pageY - rect.top); //Pen position according to x and y
  context.stroke();
  context.moveTo(e.pageX - rect.left, e.pageY - rect.top); //Will move point to the position of the pen
  // context.beginPath();
  // context.moveTo(0, 0); //Start pen position according to x and y 
  // context.lineTo(x, y); //Final pen position according to x and y
  // context.stroke(); //Will make a line
  // context.closePath();  
  // x++;
  // y++;
} 

canvas.onmousedown = (e) => {
  isMouseDown = true;
  draw(e);
}

canvas.onmouseup = (e) => {
  context.beginPath();
  isMouseDown = false;
}

canvas.onmousemove = (e) => {
  if(isMouseDown){
    draw(e);
  }
}

colorArray.forEach((color) => {
  const colorPlate = document.createElement("div");
  colorPlate.className = "color";
  colorPlate.style.backgroundColor = color;
  colorPlate.addEventListener("click", () => {
    currentColor = color;
  });
  colorContainer.insertAdjacentElement("beforeend", colorPlate);
});

clearBtn.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// setInterval(draw, 40);