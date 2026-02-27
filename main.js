// Optionally add JavaScript enhancements here

// Smooth scroll to sections for navbar anchors
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('a.nav-link, .btn[href^="#"]');
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      var href = link.getAttribute("href");
      if (href && href.startsWith("#") && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior: "smooth"});
      }
    });
  });
});