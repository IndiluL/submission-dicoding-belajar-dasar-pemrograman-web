// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Submissionku";
    $("#favicon").attr("href", "../assets/img/new-ui-logo.png");
  } else {
    document.title = "Submission Dicoding 2024";
    $("#favicon").attr("href", "../assets/img/new-ui-logo.png");
  }
});

// script hamburger untuk mobile responsive
const navbarNav = document.querySelector('.navbar ul');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Scroll to Top
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Ketika pengguna menggulir halaman
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Ketika tombol Scroll to Top diklik
scrollToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
