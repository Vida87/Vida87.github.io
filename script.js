let buttonOne = document.getElementById("menu-1-button");
let menuOne = document.getElementById("menu-1");

buttonOne.addEventListener("mouseover", openMenuOne);
buttonOne.addEventListener("mouseleave", hideMenuOne)

function openMenuOne() {
  menuOne.classList.add("show");
  // hide the other menus
}

function hideMenuOne() {
  menuOne.classList.remove("show");
  // hide all
}


let buttonTwo = document.getElementById("menu-2-button");
let menuTwo = document.getElementById("menu-2");

buttonTwo.addEventListener("mouseover", openMenuTwo);
buttonTwo.addEventListener("mouseleave", hideMenuTwo)

function openMenuTwo() {
  menuTwo.classList.add("show");
}

function hideMenuTwo() {
  menuTwo.classList.remove("show");
}


let buttonThree = document.getElementById("menu-3-button");
let menuThree = document.getElementById("menu-3");

buttonThree.addEventListener("mouseover", openMenuThree);
buttonThree.addEventListener("mouseleave", hideMenuThree)

function openMenuThree() {
  menuThree.classList.add("show");
}

function hideMenuThree() {
  menuThree.classList.remove("show");
}



let openIcon = document.getElementById('menu-trigger');
openIcon.addEventListener('click', sideMenuAppears);
let closeIcon = document.getElementById('menu-close');
closeIcon.addEventListener('click', sideMenuDisappears);

function sideMenuAppears(){
  document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuDisappears(){
  document.getElementById('side-menu').classList.remove('show-menu');
}
