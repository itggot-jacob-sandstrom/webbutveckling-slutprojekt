objects = document.getElementsByClassName("category")

position = 0

// window.location.href = 'index.html';

position = Math.floor(window.scrollY / document.querySelector('.categorylink').clientHeight)
// console.log(y)

function load(){
    // objects[0].scrollIntoView({
    //     behavior: "smooth"
    // });
    // console.log("loaded")
    // start = document.querySelector(".start")
    // start.scrollIntoView("smooth");
}

function menucolor(){
    if(!document.querySelector(".sidebar").classList.contains("active")){

        if(position == 0 && !document.querySelector(".sidebar").classList.contains("active")){
            document.querySelector(".menu").classList.add("active")
        }else{
            document.querySelector(".menu").classList.remove("active")
        }
    }
    // console.log(document.querySelector(".sidebar").classList.contains("active"))
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

// down = document.getElementsByClassName("arrowdown");
// for (let index = 0; index < down.length; index++) {
//     down[index].addEventListener("click", scrolldown);
    
// }

// up = document.getElementsByClassName("arrowup");
// for (let index = 0; index < up.length; index++) {
//     up[index].addEventListener("click", scrollup);
    
// }


function menu_open(){
    menu = document.querySelector(".sidebar")
    menu.classList.toggle("active")
    if(position != 0 || !document.URL.includes("index")){
        document.querySelector(".menu").classList.toggle("active")

    }
}

window.setInterval(function(){
    
}, 500);


// s = document.querySelector(".menu")
// s.addEventListener("click", menu_open)

//  disables scroll on index
if (document.URL.includes("index")) {
    document.body.classList.add("disablescroll")
    document.querySelector(".menu").classList.add("active")
}else{
    position = 1
}

// console.log(document.URL)