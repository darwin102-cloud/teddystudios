console.log("TEDDY STUDIOS Website Loaded");

// MOBILE MENU


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("menuOverlay");

function closeMenu(){

    navLinks.classList.remove("active");
    overlay.classList.remove("active");

    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");

}

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if(navLinks.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    }else{

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",closeMenu);

});

overlay.addEventListener("click",closeMenu);