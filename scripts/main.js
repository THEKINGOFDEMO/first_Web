document.getElementById("woqunima").addEventListener("click", () => {
    alert("别戳我，我怕疼。");
  });
myHeading=document.getElementById("h1");
function setUserName() {
let myName = prompt("请输入你的名字。");
if (!myName) {
    setUserName();
} else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}
}
document.getElementById("qiehuan").addEventListener("click", () => {
    setUserName()
});
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }