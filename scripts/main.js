const myHeading = document.querySelector("h2");
myHeading.textContent = "Welcome to my site, visitant!";

const myImage = document.querySelector("div.main-image img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/main-page/hornet-big-shoe.jpg") {
    myImage.setAttribute("src", "images/main-page/knight-big-shoe.webp");
  } else {
    myImage.setAttribute("src", "images/main-page/hornet-big-shoe.jpg");
  }
});

let myButton = document.querySelector("div.change-usr-button");
//
function setUserName() {
  const myName = prompt("Please, enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my site, ${myName}!`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});
