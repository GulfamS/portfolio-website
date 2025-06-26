const toggleBtn = document.getElementById("theme-toggle");
let isDark = false;

toggleBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".hello-background").classList.toggle("dark-mode");
    document.querySelector(".nav").classList.toggle("dark-mode");
    document.querySelector(".nav-link").classList.toggle("dark-mode")

    if (!isDark) {
        toggleBtn.src = "https://cdn-icons-png.flaticon.com/512/702/702814.png";
        isDark = true;
      } else {
        toggleBtn.src = "https://static.vecteezy.com/system/resources/previews/012/951/001/non_2x/moon-stars-icon-moon-star-night-sign-crescent-moon-with-stars-at-night-evening-or-nighttime-flat-icon-minimalist-style-element-of-travel-icon-vector.jpg";
        isDark = false;
      }
})