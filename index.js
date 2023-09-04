let menuList = document.querySelector("ul");
let menuBar = document.querySelector(".menu");
console.log(menuList);
function toggleMenuBar() {
  console.log("Clicked on Menu bar");
  menuList.classList[0]
    ? menuList.classList.remove("hide")
    : menuList.classList.add("hide");
}
menuBar.onclick = () => toggleMenuBar();
