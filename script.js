new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
   
  });

  document.querySelectorAll('.badge-status').forEach(el => {
    const status = el.textContent.trim().toLowerCase();
    
    if (status === 'upcoming') {
      el.classList.add('upcoming');
    } else if (status === 'ended') {
      el.classList.add('past');
    }
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('status');
  
    select.addEventListener('change', function () {
      const selectedValue = this.value.toLowerCase(); // 'upcoming' or 'past'
      const cards = document.querySelectorAll('.card-item');
  
      cards.forEach(card => {
        const badge = card.querySelector('.badge-status');
        const badgeText = badge ? badge.textContent.trim().toLowerCase() : '';
  
        if (selectedValue === 'upcoming' && badgeText === 'upcoming') {
          card.style.display = 'block';
        } else if (selectedValue === 'past' && badgeText === 'ended') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Trigger filtering once on load to match default option
    select.dispatchEvent(new Event('change'));
  });
  