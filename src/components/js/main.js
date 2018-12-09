import $ from 'jquery';

export function is_mobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

$(".tabs-content .tab-item").not(":first").hide();
  $(".tabs-content .tab").click(function() {
    if($(this).hasClass('active')){return false}
      else{
    $(".tabs-content .tab").removeClass('active');
    $(this).addClass('active')
    $(".tabs-content .tab-item").hide().eq($(this).index()).fadeIn();
  }
  }).eq(0).addClass('active');