  
const dropdown = document.querySelector('.header-btn');
const dropdownItems = document.querySelector('.header-sell');

dropdown.onclick = function () {
  dropdownItems.classList.toggle('header-sell-active');
}



$(window).scroll(function () {
  if (this.scrollY > 20)
    $('.header').addClass('changepad');
  else
    $('.header').removeClass('changepad');
});

document.querySelector(".wrapper").onclick = function () {
  document.querySelector(".burger").classList.toggle("burger_active");
  document.querySelector(".nav-headrer").classList.toggle("nav-headrer-active");
  document.querySelector(".content").classList.toggle("content-active");
};
