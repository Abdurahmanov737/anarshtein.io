var menuOpen = document.getElementById("header-menu")
var insideMenu = document.getElementById("mobile-inside")
var menuClose = document.getElementById("mobile-close")

function closeFuntion(){
    if (insideMenu.classList.contains("visible")) {
        menuOpen.classList.remove("rotated")
        insideMenu.classList.remove("visible")
    } else {
        menuOpen.classList.add("rotated")

        insideMenu.classList.add("visible")

    }
}

menuOpen.onclick = function(){
    closeFuntion()
};
menuClose.onclick = function(){
    closeFuntion()
};