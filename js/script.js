$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function () {
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});

function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener("resize", function () {
  var w = window.innerWidth;
  var responsiveDiv = document.querySelectorAll('#navbarSupportedContent');

  responsiveDiv.forEach((element) => {
    if (w < 992) {
      element.classList.add("collapse");
      element.classList.add("navbar-collapse");
      console.log("desktop Remove");
    } else {
      element.classList.remove("collapse");
      element.classList.remove("navbar-collapse");
    }
  })
});