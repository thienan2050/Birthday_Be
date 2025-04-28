const sectors = [
  { color: "#FFD700", text: "#333333", label: "Màn hình + Bàn phím" },      // Vàng gold
  { color: "#FF6347", text: "#ffffff", label: "Thẻ BHSK Bảo Việt" },         // Đỏ cam
  { color: "#7FFFD4", text: "#333333", label: "Máy chạy bộ" },               // Xanh ngọc
  { color: "#9370DB", text: "#ffffff", label: "Thăm bác sỹ" },               // Tím nhạt
  { color: "#00CED1", text: "#ffffff", label: "Bàn làm việc di động" },      // Xanh biển
  { color: "#FF69B4", text: "#ffffff", label: "Apple watch" },               // Hồng đậm
  { color: "#1E90FF", text: "#ffffff", label: "Skin care spa" },             // Xanh dương sáng
  { color: "#FF4500", text: "#ffffff", label: "Voice course" },              // Cam đỏ
  { color: "#7CFC00", text: "#333333", label: "Mic thu âm" },                // Xanh lá sáng
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



const friction = 0.998; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians
let result = 0;

let spinButtonClicked = false;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

const reasonMapping = {
  "Màn hình + Bàn phím": "Anh mới biết em từng phẫu thuật Lasik, nên từ này em phải dùng màn hình rời để bảo vệ mắt nha.",
  "Thẻ BHSK Bảo Việt": "Một Marketinger từng nói rằng, sức khoẻ là thứ vớ vẩn cho tới khi bệnh tật ùa tới, là gánh nặng nếu không có tiền đóng viện phí.",
  "Máy chạy bộ": "Làm việc 30p, đi bộ 5 phút chắc chắn không phải style làm việc của công ty Marketing.",
  "Thăm bác sỹ": "Anh còn phát hiện ra em có u và có sỏi thận nữa >.<",
  "Bàn làm việc di động": "Bàn này giúp em đổi tư thế làm việc, nó rất cần cho những marketingers.",
  "Apple watch": "Giúp em bớt cắm mặt vào điện thoại lại, ignore những tin nhắn vớ vẩn.",
  "Skin care spa": "Yêu thương bản thân, chăm sóc làn da tươi trẻ.",
  "Voice course": "Khoá học này để xây dựng mối quan hệ, khi nào xong eCV, kiếm được một số tiền nhất định thì em sẽ đi học nha.",
  "Mic thu âm": "Voice's setup."
};



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
    if (!angVel) angVel = rand(0.45, 0.6);
    spinButtonClicked = true;
  });
}

init();
events.addListener("spinEnd", (sector) => {
  console.log(`Woop! You won ${sector.label}`);

  // Thêm độ trễ 1 giây (1000 ms) trước khi hiển thị kết quả
  setTimeout(() => {
    spinEl.textContent = `🎉 ${sector.label}`; // Hiển thị kết quả quay
    spinEl.style.background = sector.color;
    spinEl.style.color = sector.text;

    // Tạo Popup chúc mừng
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";

    // Thêm nội dung chúc mừng
    const message = document.createElement("p");
    message.textContent = `Em quay được ${sector.label} nè `;
    message.classList.add("popup-message");
    popup.appendChild(message);

    // Thêm lời giải thích theo từng món quà
    const reason = document.createElement("p");
    reason.textContent = reasonMapping[sector.label] || "Chúng tôi đã chọn món quà đặc biệt này cho bạn!";
    reason.classList.add("popup-reason");
    popup.appendChild(reason);
    reason.classList.add("popup-reason");
    popup.appendChild(reason);


    // Thêm nút chuyển trang
    const btn = document.createElement("button");
    btn.textContent = "Đi tới giỏ hàng";
    btn.style.marginTop = "20px";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      // Chuyển trang tương ứng
      const pageMapping = {
        "Màn hình + Bàn phím": "2.html",
        "Thẻ BHSK Bảo Việt": "BaoViet.html",
        "Máy chạy bộ": "MayChayBo.html",
        "Thăm bác sỹ": "BenhVien.html",
        "Bàn làm việc di động": "BanLamViecDiDong.html",
        "Apple watch": "AppleWatchSE.html", // Thêm page cho Apple watch
        "Skin care spa": "1.html", // Thêm page cho Skin care spa
        "Voice course": "VoiceCourse.html", // Thêm page cho Voice course
        "Mic thu âm": "mic.html", // Thêm page cho Mic thu âm
      };
      

      const targetPage = pageMapping[sector.label];
      if (targetPage) {
        window.location.href = targetPage; // Chuyển tới trang tương ứng
      }
    });

    popup.appendChild(btn);

    // Thêm popup vào body
    document.body.appendChild(popup);
  }, 1000); // Độ trễ 1 giây (1000 ms)
});
