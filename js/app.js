const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});

$(document).ready(function() {
  // preloader
  $('.preloader').fadeOut();

  // navBtn
  $('.navBtn').click(function() {
    $('.nav').toggleClass('nav-show');
  });

  //Smooth Scrolling
  $('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });

  //Smooth Scrolling
  $('#about a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {}
      );
    }
  });

  // magnific popup
  $('#projects__modal').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.owl-prev').html("<div><i class='fas fa-chevron-left'></i></div>");
  $('.owl-next').html("<div><i class='fas fa-chevron-right'></i></div>");
});
