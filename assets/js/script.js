$(document).ready(function () {
  // Navbar scroll effect
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled");
    } else {
      $(".navbar-custom").removeClass("scrolled");
    }
  });

  // Initialize carousel
  var carousel = new bootstrap.Carousel($("#templeCarousel")[0], {
    interval: 5000,
    wrap: true,
    keyboard: true,
    pause: "hover",
  });

  // Custom keyboard navigation
  $(document).keydown(function (e) {
    if (e.keyCode == 37) {
      carousel.prev();
    }
    if (e.keyCode == 39) {
      carousel.next();
    }
  });

  // Update slide numbers
  $("#templeCarousel").on("slide.bs.carousel", function (e) {
    var currentSlide = $(e.relatedTarget).index() + 1;
    var totalSlides = $(".carousel-item").length;

    setTimeout(function () {
      $(".slide-number").text(currentSlide + " / " + totalSlides);
    }, 300);
  });

  // Smooth scroll for nav links
  $(".nav-link").click(function (e) {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Search functionality
  $(".navbar-search button").click(function () {
    var searchTerm = $(".navbar-search input").val();
    if (searchTerm) {
      alert("Searching for: " + searchTerm);
    }
  });

  // Donate button
  $(".donate-btn .btn").click(function () {
    alert("Thank you for your generous donation! 🙏");
  });

  // Carousel buttons
  $(".carousel-caption .btn").click(function () {
    var btnText = $(this).text().trim();
    alert("Redirecting to: " + btnText);
  });

  console.log("Temple Website initialized successfully! 🕉️");
});
