function handleClick (destination) {
    window.location.href = destination;
}

function handleNavToggle () {
    var element = document.querySelector("header");
    element.classList.toggle("show");
    element = document.querySelector("body");
    element.classList.toggle("show")
}

window.addEventListener('resize', function() {
    var viewportWidth = window.innerWidth;
  
    if (viewportWidth >= 900) {
      document.querySelector("body").classList.remove("show");
      document.querySelector("header").classList.remove("show");
    }
  });