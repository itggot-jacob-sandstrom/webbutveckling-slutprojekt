function scrollup(e){position--,objects[position].scrollIntoView({behavior:"smooth"}),setTimeout(menucolor,500)}function scrolldown(e){position++,objects[position].scrollIntoView({behavior:"smooth"}),setTimeout(menucolor,500)}function menu_open(){menu=document.querySelector(".sidebar"),menu.classList.toggle("active"),document.querySelector(".menucloser").classList.toggle("active")}objects=document.getElementsByClassName("category"),position=0,document.URL.includes("index")?(document.body.classList.add("disablescroll"),position=Math.floor(window.scrollY/document.querySelector(".categorylink").clientHeight+.1)):position=1;let big=!1;function popup(e){let o=document.querySelectorAll(".shopimgbox");o[e].classList.toggle("popup"),o[e].parentElement.parentElement.classList.toggle("disableRelative"),imgi=e,e>5&&(imgi-=6),4==imgi&&(imgi=0),5==imgi&&(imgi=1);let t=`url(${"../img/snowy_"+`${imgi+1}`+"_1920x1080.jpg"})`;big?(big=!1,o[e].removeAttribute("style")):(big=!0,o[e].style.backgroundImage=t)}