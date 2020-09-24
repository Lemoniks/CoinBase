  
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
