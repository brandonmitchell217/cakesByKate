// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
})

$('.burger').click(function () {
  $('.navList').toggleClass('active')
  if ($('.navList').hasClass('active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
})

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 100) {
      $('nav').css('background', '#13031C')
      $('.navList').css('background', '#13031c')
      $('.navList ul li a').css('color', '#F8EDEB')
      $('.burger').css('color', '#ff3298')
    } else {
      $('nav').css('background', 'transparent')
      $('.navList').css('background', '#F8EDEB')
      $('.navList ul li a').css('color', '#0e0d0f')
      $('.burger').css('color', '#0e0d0f')
    }
  })
})

const fkLnk = document.querySelectorAll('.fkLnk')

fkLnk.forEach((lnk) => {
  lnk.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

// $('.navList ul li a').hover(
//   function () {
//     var scroll = $(window).scrollTop()
//     if (scroll > 100) {
//       $(this).css('color', '#ff3298')
//     } else {
//       $(this).css('color', '#B01A65')
//     }
//   },
//   function () {
//     var scroll = $(window).scrollTop()
//     if (scroll > 100) {
//       $(this).css('color', '#F8EDEB')
//     } else {
//       $(this).css('color', '#0e0d0f')
//     }
//   }
// )
