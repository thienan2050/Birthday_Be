const sectors = [
  { color: "#FFD700", text: "#333333", label: "Màn hình + Bàn phím" },         // vàng kim
  { color: "#FF6347", text: "#ffffff", label: "Thẻ BHSK Bảo Việt" },           // đỏ cam (tomato)
  { color: "#7FFFD4", text: "#333333", label: "Máy chạy bộ" },                 // xanh ngọc nhạt (aquamarine)
  { color: "#9370DB", text: "#ffffff", label: "Thăm bác sỹ" },                 // tím nhạt
  { color: "#00CED1", text: "#ffffff", label: "Bàn làm việc di động" },       // xanh dương nhạt (dark turquoise)
  { color: "#FF69B4", text: "#ffffff", label: "Quay lại một lần" },           // hồng (hot pink)
];

const events = {
  listeners: {},
  addListener: function (eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  },
  fire: function (eventName, ...args) {
    if (this.listeners[eventName]) {
      for (let fn of this.listeners[eventName]) {
        fn(...args);
      }
    }
  },
};

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;



const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians
let result = 0;

let spinButtonClicked = false;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();

  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();

  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = sector.text;
  ctx.font = "bold 25px 'Lato', sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  //

  ctx.restore();
}

// function rotate() {
//   const sector = sectors[getIndex()];
//   ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

//   spinEl.textContent = (!angVel && !result )? "HPBD Be Chill" : sector.label;
//   spinEl.style.background = sector.color;
//   spinEl.style.color = sector.text;
// }
function rotate() {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

  if (!angVel && !result) {
    // Trước khi quay lần đầu
    spinEl.textContent = "HPBD Be Chill";
    spinEl.style.background = "#faedcd"; // màu nền lúc chưa quay
    spinEl.style.color = "#c1121f";      // chữ trắng
  } else {
    // Trong lúc quay hoặc sau khi quay
    spinEl.textContent = sector.label;
    spinEl.style.background = sector.color;
    spinEl.style.color = sector.text;
  }
}




function frame() {
  // Fire an event after the wheel has stopped spinning
  if (!angVel && spinButtonClicked) {
    const finalSector = sectors[getIndex()];
    events.fire("spinEnd", finalSector);
    result = 1;
    spinButtonClicked = false; // reset the flag
    return;
  }

  angVel *= friction; // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0; // Bring to stop
  ang += angVel; // Update angle
  ang %= TAU; // Normalize angle
  rotate();
}

function engine() {
  frame();
  requestAnimationFrame(engine);
}

function init() {
  sectors.forEach(drawSector);
  rotate(); // Initial rotation
  engine(); // Start engine
  spinEl.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.45);
    spinButtonClicked = true;
  });
}

init();

events.addListener("spinEnd", (sector) => {
  console.log(`Woop! You won ${sector.label}`);
  spinEl.textContent = `🎉 ${sector.label}`; // Hiển thị kết quả quay
  spinEl.style.background = sector.color;
  spinEl.style.color = sector.text;

  // Popup chúc mừng sau khi có kết quả
  alert(`Chúc mừng bạn! Bạn đã trúng: ${sector.label}`);
});
