objects = document.getElementsByClassName("category")

window.scrollTo(0, 0);

function load(){
    position = 0
    objects[0].scrollIntoView("smooth");
    console.log("loaded")
    start = document.querySelector(".start")
    // start.scrollIntoView("smooth");
}

function scrollup(event){
    position -- 
    console.log("up")
    console.log(position)
    objects[position].scrollIntoView("smooth");
    
}

function scrolldown(event){
    position ++
    console.log("down")
    console.log(position)
    objects[position].scrollIntoView("smooth");

}

// down = document.getElementsByClassName("arrowdown");
// for (let index = 0; index < down.length; index++) {
//     down[index].addEventListener("click", scrolldown);
    
// }

// up = document.getElementsByClassName("arrowup");
// for (let index = 0; index < up.length; index++) {
//     up[index].addEventListener("click", scrollup);
    
// }