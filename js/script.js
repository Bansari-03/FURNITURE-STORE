// preloader

setInterval(displayHello, 1000);

function displayHello() {
    document.getElementById("pre-loader").style.display = 'none';
}

$(document).ready(function () {
    //  sticky header
    var stickyOffset = $('header').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyOffset) {
            $('header').addClass("fixed");
            $('.track-arrow').fadeIn()
        }
        else {
            $('header').removeClass("fixed");
            $('.track-arrow').fadeOut()
        }
    });
    // client slider
    $('#client').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay:true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2,
                dotsEach: 3,
            },
            567: {
                items: 2,
                dotsEach: 4,

            },
            768: {
                items: 4,

            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    // News slider 
    $('#news').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dotsEach: 5,
            },
            768: {
                items: 2,
                dotsEach: 4,
            },
            992: {
                items: 3
            }
        }
    })

    // Product
    $('#product').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText: ['<i class="fa-solid fa-angle-left" style="color: #f2f2f2;"></i>',
                 '<i class="fa-solid fa-angle-right" style="color: #f2f2f2;"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // track arrow
    $('.track-arrow').hide()
    $('.track-arrow').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })

    $('.chair-items').isotope({
        itemSelector: '.chair-item',
        layoutMode: 'fitRows'
      });

      $('.navigate ul li').click(function(){
        $('.navigate ul li').removeClass('tab-active');
        $(this).addClass('tab-active');

        var image =$(this).attr('data-filter');
    $('.chair-items').isotope({
        filter:image
    });
    return false;
    });
})
AOS.init();
