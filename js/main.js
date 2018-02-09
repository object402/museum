$(document).ready(function(){
  $('.language_more').click(function(){
    $('.sub_btn').toggleClass('sub_btn_on');
    $('.language_list').slideToggle();
  })

  $(".gnb_main>li").each(function(i){
    $(this).index();
    var gnbLi =   $(".gnb_main>li").eq(i);
    var gnbSubmenu = $(".gnb_main>li .gnb_sub").eq(i);
    var gnbSemo =   $(".gnb_main>li .semo").eq(i);
    console.log(gnbSemo);
    $(gnbLi).hover(function(){
      $(gnbSubmenu).stop().toggle();
      $(gnbSemo).stop().toggle();
    })
  })

  $('a.sitemap_btn').click(function(){
    $('div.sitemap_layer').show();
  })
  $('button.sitemap_close').click(function(){
    $('div.sitemap_layer').hide();
  })

  $('.guide_btn_wrap').click(function(){
    $('.guide_btn_wrap').toggleClass('guide_btn_on');
    $('.guide_btn').toggleClass('on');
    $('.guide_list').toggle();
  })
  $('.familysite_btn_wrap').click(function(){
    $('.familysite_btn_wrap').toggleClass('family_btn_on');
    $('.familysite_btn').toggleClass('on');
    $('.familysite_list').toggle();
  })

})//메인 스크립트 종료
