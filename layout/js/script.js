window.onload = function() {
  var modal = document.getElementById("welcome");
  modal.classList.add("modal-show");
  var modalClose = document.querySelector(".welcome-close");

  modalClose.addEventListener("click", function() {
    modal.classList.add("modal-hide");
    
    setTimeout(function() {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-hide");
    }, 500);
  });

  const swiper = new Swiper('.main-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const swiperConfigCards = {
    loop: true,
    loopedSlides: 2,
    autoplay: {
      disableOnInteraction: false
    },
    spaceBetween: 16,
    slidesPerView: 'auto'
  }
  
  const info = new Swiper('.info-cards', swiperConfigCards);
  const brands = new Swiper('.brand-cards', swiperConfigCards);
  
  const parents = document.querySelectorAll('.fi-header');
  parents.forEach(parent => {
    const content = parent.nextElementSibling;
    
    parent.addEventListener('click', () => {
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}