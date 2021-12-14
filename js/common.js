'use strict';

$(document).ready(function() {

	svg4everybody({});

    $('.js-main-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000
    });

     $('.room-gallery__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.room-gallery__sm'
});
$('.room-gallery__sm').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.room-gallery__big',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  variableWidth: true
});

$('.testimonial-slider').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true
});
if($(window).width() > 600) {

    $('.living-block__slider').on('init', function () {
        if($(this).find('.living-block__item').length < 3) {
            $(this).removeClass('slick-initialized');
            $(this).addClass('slick-destroy');
        }
    });
}

$('.living-block__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.inner-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$(window).on('scroll',function () {
    let top_offset = $(window).scrollTop();
    let header_height = $('.header').height();
    if(top_offset > header_height) {
        $('.header-fixed').addClass('is-visible');
        $('.fixed-sidebtn').addClass('is-visible');
    }
    else {
        $('.header-fixed').removeClass('is-visible');
        $('.fixed-sidebtn').removeClass('is-visible');
    }
});

$(document).on('mouseover', '.dropdown', function () {
    $(this).children('ul').addClass('is-active');
});
$(document).on('mouseout', '.dropdown', function () {
    $(this).children('ul').removeClass('is-active');
});

    var Tabs = {

        init: function() {
            this.bindUIfunctions();
            this.pageLoadCorrectTab();
        },

        bindUIfunctions: function() {

            // Delegation
            $(document)
                .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
                    Tabs.changeTab(this.hash);
                    event.preventDefault();
                })
                .on("click", ".transformer-tabs a.active", function(event) {
                    Tabs.toggleMobileMenu(event, this);
                    event.preventDefault();
                });

        },

        changeTab: function(hash) {

            var anchor = $("[href='" + hash + "']");
            var div = $(hash);

            // activate correct anchor (visually)
            anchor.addClass("active").parent().siblings().find("a").removeClass("active");

            // activate correct div (visually)
            div.addClass("active").siblings().removeClass("active");

            // update URL, no history addition
            // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
            // window.history.replaceState("", "", hash);

            // Close menu, in case mobile
            anchor.closest("ul").removeClass("open");

        },

        // If the page has a hash on load, go to that tab
        pageLoadCorrectTab: function() {
            this.changeTab(document.location.hash);
        },

        toggleMobileMenu: function(event, el) {
            $(el).closest("ul").toggleClass("open");
        }

    }

    Tabs.init();

    if($('#map').length) {
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                    center: [44.053007, 42.874226],
                    zoom: 14,
                    controls: ['zoomControl']
                }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'ИнфоМедФарм'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '/img/content/map-marker.png',
                    // Размеры метки.
                    iconImageSize: [71, 71],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        });

    }

    /*==========ACCORDION==============*/

    $('.accordion > li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-content');
        $('.accordion').find('.accordion-content').not(dropDown).slideUp();
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        }
        else {
            $('.accordion').find('li.active').removeClass('active');
            $(this).parent().addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    /*==========END ACCORDION==============*/

    /*==========FANCYBOX SETTINGS==============*/

    $('[data-fancybox]').fancybox({
        loop: true,
        infobar: false,
        backFocus: false
    });

    /*==========END FANCYBOX SETTINGS==============*/

    $("input[type='tel']").mask('+9(999)999-99-99');

    $(function() {
        $.scrollUp({
            scrollText: '<i class="scroll-top"></i>', // Text for element, can contain HTML
        });
    });

    $(document).on('mouseover', '.point button', function () {
        $('.complex-map__modal').fadeOut();
        $(this).parent().find('.complex-map__modal')
        $(this).parent().find('.complex-map__modal').fadeToggle();
        
    })

    function AboutListSlider() {
        $('.about-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: "unslick"
    }
  ]
        })

    }
    function RoomsListSlider() {
        $('.rooms-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
        })
    }
    $(window).resize(function () {
        if($(window).width() < 1200) {
            AboutListSlider();
            RoomsListSlider();
        }
    });
    if($(window).width() < 1200) {
        AboutListSlider();
        RoomsListSlider();
    }

    $('.table-wrapper').prepend("<div class='table-dropdown'><a href='#' class='table-dropdown-toggle'></a><div class='table-dropdown-list'></div></div>");

	$('table th').each(function(){
	var dropdown_name = $(this).text();
	var index_dropdow = $(this).index() + 1;
	if (dropdown_name.length != 0) {
	$('.table-dropdown-list').prepend("<span data-table='" + index_dropdow +"'>" + dropdown_name + "</span>");
}
	});
	var text_dropdown_toggle = $('table th:nth-child(2)').text()
	$('.table-dropdown-toggle').text(text_dropdown_toggle);
	$(document).on('click', '.table-dropdown-list span', function(){
		var name_column = $(this).text();
		var index_column = $(this).attr('data-table');
		var number_column = 'table td:nth-child(' + index_column + ')';
		$(this).addClass('active').siblings().removeClass('active');
		$('table td').css('display', 'none');
		$(number_column).css('display', 'table-cell');
		$(this).parents('.table-dropdown').find('.table-dropdown-toggle').text(name_column).removeClass('is-active');
		$(this).parent().removeClass('is-active');
	});
	$(document).on('click','.table-dropdown-toggle', function(e){
		e.preventDefault();
		$(this).addClass('is-active');
		$('.table-dropdown-list').toggleClass('is-active');
	});


if($(window).width() < 991) {
    $('#main-menu').on('click',function (e) {
        e.preventDefault();
    });

    $(function() {
        const header_faq  = $('.header__faq');

        $("#main-menu").mmenu({
            extensions 	: [ "position-left" ],
            navbar 		: {
                title 		: ""
            },
            navbars		: [{
                height 	: 1,
                content : [
                    header_faq
                ]
            }, {
                content : ["prev","title"]
            }]}, { });


    });


}
if ($(window).width() < 600) {
    $('.footer__btn').after($('.footer-social'));
}

});






