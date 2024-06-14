// var typed = new typed(".text",{
//     Strings:["Frontend Developer", "Youtuber", "Web Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
