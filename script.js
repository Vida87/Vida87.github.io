// to make something change when clicked
// let modalBox = document.getElementsByClassName("modal-box")[0];

// let openModal = function() {
//   modalBox.classList.toggle("open");
// }


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
  