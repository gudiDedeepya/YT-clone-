let menubtn = document.querySelector(".menu-btn");
let sidebar =document.querySelector(".side-bar");
let videocontainer=document.querySelector(".video-container")
menubtn.onclick = function(){
    sidebar.classList.toggle("resize-sidebar")
    videocontainer.classList.toggle("widen-video-container");
}