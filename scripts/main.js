let isClicked = false;

let currentImage = 1; // 初始显示第一张图片

document.getElementById("woqunima").addEventListener("click", () => {
    const img = document.getElementById("woqunima");
    
    // 根据当前显示的图片切换到另一张图片
    if (currentImage === 1) {
        img.src = "image/xuewaiyu.jpg"; // 切换到第二张图片
        currentImage = 2;
    } else {
        img.src = "image/firefox-icon.png"; // 切换到第一张图片
        currentImage = 1;
    }
});
myHeading=document.getElementById("h1");
function setUserName() {
let myName = prompt("请输入你的名字。");
if (!myName) {
    setUserName();
} else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "你好，" + myName;
}
}
document.getElementById("qiehuan").addEventListener("click", () => {
    setUserName()
});
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "你好，" + storedName;
  }