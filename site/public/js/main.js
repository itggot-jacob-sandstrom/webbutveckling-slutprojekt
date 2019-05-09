objects = document.getElementsByClassName("category")

position = 0

disable = false

// window.location.href = 'index.html';


//  disables scroll on index
if (document.URL.includes("index")) {
    document.body.classList.add("disablescroll")
    position = Math.floor(window.scrollY / document.querySelector('.categorylink').clientHeight)
    if( position == 0){

        document.querySelector(".menu").classList.add("active")
    }
    disable = true
}else{
    position = 1
}

if (document.URL.includes("shop")){
    disable = true
    document.querySelector(".menu").classList.add("active")
}
console.log(document.URL)
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

console.log(disable)
console.log(position)

function menu_open(){
    menu = document.querySelector(".sidebar")
    menu.classList.toggle("active")
    if(position != 0 || !disable){
        document.querySelector(".menu").classList.toggle("active")

    }
}




// s = document.querySelector(".menu")
// s.addEventListener("click", menu_open)
