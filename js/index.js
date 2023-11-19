
$(document).ready(function() {
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });
    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });
})

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          const target = $el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
    // Close navbar after a navbar item is clicked
    const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
    $navbarItems.forEach(function ($el) {
      $el.addEventListener('click', function () {
  
        // Ensure the event is only triggered for smaller screens where the burger is visible
        if (window.innerWidth <= 1024) {  // Assuming 1024px as the breakpoint; adjust if necessary
  
          const $navbarMenu = document.querySelector('.navbar-menu');
          const $navbarBurger = document.querySelector('.navbar-burger');
  
          // Remove the "is-active" class from both the "navbar-burger" and the "navbar-menu"
          if ($navbarMenu.classList.contains('is-active')) {
            $navbarMenu.classList.remove('is-active');
            $navbarBurger.classList.remove('is-active');
          }
  
        }
  
      });
    });
  
  });
  