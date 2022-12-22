let status = true;

// getting navigation elements
let toolbar = document.querySelector(".menu-toolbar");
let menu_icon = document.querySelector("img[alt=menu-icon]");
toolbar.addEventListener("click",()=>{
  if (status) {
    menu_icon.src = "/images/icon-close-menu.svg";
  } else {
    menu_icon.src = "/images/icon-menu.svg";
  }
  status = !status;
})
