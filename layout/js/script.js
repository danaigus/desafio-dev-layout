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

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

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