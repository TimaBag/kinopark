function is_mobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}
/**********POPUP*************/
$('.js-call-modal-popup-film').on('click', function() {
  $('#modalWindow').fadeIn(500);
  if (!is_mobile()) {
    $('html').addClass('scr');
    $(".fixed-menu").addClass('head-nav-right');
    $('.scroll-to-top').addClass('scroll-right');
    $('.fixed-btn-soc-network').addClass('scr');
  } else {
    $('html').addClass('scr-mobile');
  }
  return false;
});

$('.js-movie-trailer').on('click', function() {
  $('#modalWindow-2').fadeIn(500);
  $('.modal-popup-movie-trailer').append('<iframe  src="https://www.youtube.com/embed/BwPkdjKe91I" ></iframe>')
  if (!is_mobile()) {
    $('html').addClass('scr');
    $(".fixed-menu").addClass('head-nav-right');
    $('.scroll-to-top').addClass('scroll-right');
    $('.fixed-btn-soc-network').addClass('scr');
  } else {
    $('html').addClass('scr-mobile');
  }
  return false;
});

$(".modal-container").on("click", function(e) {
  if ($(this).has('.modal-popup-movie-trailer')) {
    $(this).find('iframe').remove()
  }
  if ($(e.target).closest(".modal-popup-film").length == 0 && $(e.target).closest(".modal-popup-movie-trailer").length == 0 && $(e.target).closest(".modal-select-city").length == 0) {
    $(this).fadeOut(400);
    if ($('.modal-popup-film').is(':visible') && $('.modal-popup-movie-trailer').is(':visible')) {
      $(this).fadeOut(400);
    } else {
      if (!is_mobile()) {
        setTimeout(function() {
          $('html').removeClass('scr');
          $(".fixed-menu").removeClass('head-nav-right');
          $('.scroll-to-top').removeClass('scroll-right');
          $('.fixed-btn-soc-network').removeClass('scr');
        }, 500);
      } else {
        $('html').removeClass('scr-mobile');
        $('.film-item').addClass('film-item-mobile');
      }
    }
  }
});

$('.modal-close').on('click', function() {
  if ($(this).parents('.modal-popup-film')) {
    $(this).parents('.modal-container').fadeOut(300);
    $(this).parents('.modal-popup-film').find('iframe').remove()
  }
  if ($(this).parents('.modal-popup-movie-trailer')) {
    $(this).parents('.modal-container').fadeOut(300);
  }
  if ($('.modal-popup-film').is(':visible') && $('.modal-popup-movie-trailer').is(':visible')) {
    $(this).parents('.modal-container').fadeOut(300);
  } else {
    if (!is_mobile()) {
      setTimeout(function() {
        $('html').removeClass('scr');
        $(".fixed-menu").removeClass('head-nav-right');
        $('.scroll-to-top').removeClass('scroll-right');
        $('.fixed-btn-soc-network').removeClass('scr');
      }, 500);
    } else {
      setTimeout(function() {
        $('html').removeClass('scr-mobile');
        $('.film-item').addClass('film-item-mobile');
      }, 500);
    }
  }
});

/********head-toggle-mnu********/
$(function() {
  $(".js-head-menu-btn").on("click", function() {
    $('.head-nav').slideToggle(200);
    $(this).find('.head-menu-text').toggleClass('active');
    $('.head-toggle-menu').find('.sandwich').toggleClass('active');
    $('.overlay').toggleClass('overlay-visible');
    $('html').toggleClass('scr-mobile')
  });

  $('.js-head-mobile-search').on("click", function() {
    $(this).toggleClass('active');
    $('.head-search').toggleClass('head-search-visible');
  });

  $('.overlay').on('click', function() {
    $(".head-nav").slideToggle(200);
    $('.head-menu-text').toggleClass('active')
    $('html').removeClass('scr-mobile');
    $('.head-toggle-menu').find('.sandwich').toggleClass('active')
    $(this).toggleClass('overlay-visible');
  });

  

  $('.js-all-news').on("click", function() {
    if ($(this).html() == 'Свернуть новости') {
      $(this).parent('.news-block').find('.hidden-block').removeClass('visible-block')
      $(this).text('Все новости');
    } else {
      $(this).parent('.news-block').find('.hidden-block').addClass('visible-block')
      $(this).text('Свернуть новости');
    }
    return false;
  });
  

  $('.filter-open-hide-btn').on("click", function() {
    $('.filter-panel-right').toggleClass('visible-block');
    $(this).find('.fa').toggleClass('fa-angle-up').toggleClass('fa-angle-down')
  });

  $('.fixed-btn-soc-network').on("click", function() {
    $(this).toggleClass('height-btn')
    $(this).find('.soc-network').toggleClass('open-menu');
  });

  if (is_mobile()) {
    $('.film-item').addClass('film-item-mobile');
    $('.film-item').on("click", function() {
      $(this).removeClass('film-item-mobile')
    });
   
  }

  $(".js-city-select").on("click", function() {
    $("#select-city").fadeIn(200);
    if (!is_mobile()) {
      $('html').addClass('scr');
      $(".fixed-menu").addClass('head-nav-right');
      $('.scroll-to-top').addClass('scroll-right');
      $('.fixed-btn-soc-network').addClass('scr');
    } else {
      $('html').addClass('scr-mobile');
    }
    return false;
  });

  /************SELECT CITY****************/
  $('#select-city .city-list input[type="radio"]').on("click", function() {
    var selCity = $(this).siblings('.radio-text').html();
    $('.head-city-select .city').html(selCity);
    $('#select-city .area-city .city').html(selCity);
    $('.modal-container').fadeOut(200);
    if (!is_mobile()) {
      setTimeout(function() {
        $('html').removeClass('scr');
        $(".fixed-menu").removeClass('head-nav-right');
        $('.scroll-to-top').removeClass('scroll-right');
        $('.fixed-btn-soc-network').removeClass('scr');
      }, 500);
    } else {
      setTimeout(function() {
        $('html').removeClass('scr-mobile');
        $('.film-item').addClass('film-item-mobile');
      }, 500);
    }
  });

  if(is_mobile()){
    $('.choice-place-cinema td .prompt-window').removeClass('prompt-window-desktop');
  }

  /******TABS*********/
  $(".tabs-content .tab-item").not(":first").hide();
  $(".tabs-content .tab").click(function() {
    if($(this).hasClass('active')){return false}
      else{
    $(".tabs-content .tab").removeClass('active');
    $(this).addClass('active')
    $(".tabs-content .tab-item").hide().eq($(this).index()).fadeIn();
  }
  }).eq(0).addClass('active');

  


  /*************sliders******************/
  $(".news-block-content").slick({
    initialSlide: 0,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    // infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1
  });
  $(".cinema-img-slider").slick({
    initialSlide: 0,
    slidesToShow: 1,
    dots: false,
    arrows: true,
    // infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1
  });
  $(".js-compare-product-slider").slick({
    initialSlide: 0,
    slidesToShow: 4,
    dots: false,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 7000,
    slidesToScroll: 1,
    // infinite: false,
    asNavFor: '.js-compare-table-line',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 545,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $(window).resize(function() {
    if ($(window).width() > 1270) {
      $('.head-nav').removeAttr('style');
    }
  });
  if ($(window).width() > 1270) {
    $('.head-nav').removeAttr('style');
  }

  $('.choice-place-cinema td').on("click", function() {
    if ($(this).children(".fa").length > 0) {
      $(this).toggleClass('active')
    }
    if(is_mobile() && $(this).hasClass('active')){
      $('.prompt-window').hide();
       $(this).find('.prompt-window').fadeIn("slow").delay(3000).fadeOut("slow");
    }
  });

 

  /*******COUNTER*********/
  $('.wrapper-counter-btn').each(function() {
    $(this).parents('.tickets-item').find('.product-count').on('input', function() {
      var rep = (/^0/);
      var value = $(this).val();
      if (rep.test(value)) {
        value = value.replace(rep, '');
        $(this).val(value);
      }
      var value2 = $(this).val();
      var rep2 = /[a-zA-Zа-яА-Я]/;
      if (rep2.test(value)) {
        value2 = value2.replace(rep, '');
        $(this).val(value2);
      }
      if ($(this).val() == '') {
        $(this).val(0);
      }
      var msg = $(this).val();
    });
  });
  $('.wrapper-counter-btn').each(function() {
    $(this).find('.counter-back').on("click", function(e) {
      var valPlus = $(this).parents('.tickets-item').find('.product-count').val();
      var result = parseInt(valPlus) - 1;
      if (result >= 0) {
        $(this).parents('.tickets-item').find('.product-count').val(result);
      }
      return false;
    });
  });
  $('.wrapper-counter-btn').each(function() {
    $(this).find('.counter-forward').on("click", function(e) {
      var valPlus = $(this).parents('.tickets-item').find('.product-count').val();
      var result = parseInt(valPlus) + 1;
      if (result >= 0) {
        $(this).parents('.tickets-item').find('.product-count').val(result);
      }
      return false;
    });
  });

  /*************FIELD VALIDATION*************/
  $('input[type=tel]').inputmask("+7 (999) 999 99 99", {
    "clearIncomplete": true
  });
  $('.js-form-submit').on("click", function() {
    var jhis = $(this).parents('form');
    $(jhis).find('.error').remove();
    var error = 0;
    $(jhis).find('.requiredField').each(function() {
      if ($(this).hasClass('callback-name')) {
        if ($(this).val().length < 3) {
          $(this).parent().append('<span class="error">Представьтесь, пожалуйста</span>');
          $(this).addClass('inputError');
          error = 1;
        }
      } else if ($(this).hasClass('callback-email')) {
        var emailReg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (emailReg.test($(this).val()) == false) {
          $(this).parent().append('<span class="error">Введите корректный E-mail</span>');
          $(this).addClass('inputError');
          error = 2;
        }
      } else if ($(this).hasClass('callback-phone')) {
        if ($(this).val().length < 10) {
          $(this).parent().append('<span class="error">Введите номер телефона</span>');
          $(this).addClass('inputError');
          error = 3;
        }
      }
    });
    if (error == 0) {
      return true;
    } else {
      return false;
    }
  });
  $("input").focus(function() {
    $(this).removeClass('inputError');
  });
});