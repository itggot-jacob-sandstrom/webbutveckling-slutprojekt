objects = document.getElementsByClassName("category")

position = 0

// window.location.href = 'index.html';


//  disables scroll on index
if (document.URL.includes("index")) {
    document.body.classList.add("disablescroll")
    position = Math.floor(window.scrollY / document.querySelector('.categorylink').clientHeight + 0.1)
}else{
    position = 1
}

function scrollup(event){
    position -- 
    objects[position].scrollIntoView({
        behavior: "smooth"
    });
    setTimeout(menucolor, 500)
}

function scrolldown(event){
    position ++
    objects[position].scrollIntoView({
        behavior: "smooth"
    });
    setTimeout(menucolor, 500)
}

function menu_open(){
    menu = document.querySelector(".sidebar")
    menu.classList.toggle("active")
    document.querySelector(".menucloser").classList.toggle("active")
}

let big = false
function popup(inp){
    let imgboxes = document.querySelectorAll(".shopimgbox")
    imgboxes[inp].classList.toggle("popup")
    imgboxes[inp].parentElement.parentElement.classList.toggle("disableRelative")
    
    
    imgi = inp
    if(inp > 5){
        imgi -= 6
    }
    if(imgi == 4){
        imgi = 0
    }
    if(imgi == 5){
        imgi = 1
    }
    let url = "../img/snowy_" + `${imgi + 1}` + "_1920x1080.jpg"
    let img = `url(${url})`
    if(!big){
        big = true
        imgboxes[inp].style.backgroundImage= img
    }else{
        big = false
        imgboxes[inp].removeAttribute("style");
    }
}

