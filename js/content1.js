$(document).ready(function() {
  //스폰서슬라이드
  var donateImg = $('.donate-img > li');
  var donateImgW = donateImg.width();
  var totalImg = donateImg.length;
  var clicker = 0;
  $('.donate-img').append($('.donate-img li:lt(6)').clone());

  //이전버튼 클릭
  $('.donate-prev').click(function() {
    if (clicker == 0) {
      clicker = totalImg / 2 + 1;
      $('.donate-img').stop().css({
        marginLeft: -donateImgW * clicker
      });

    }
    clicker--;
    $('.donate-img').stop().animate({
      marginLeft: -donateImgW * clicker
    });
    console.log(clicker);
return false;
  })

  //다음버튼 클릭
  $('.donate-next').click(function() {
    clicker++;
    if (clicker == totalImg) {
      clicker = 0;
      $('.donate-img').stop().css({
        marginLeft: -donateImgW * clicker
      });
    }

    $('.donate-img').stop().animate({
      marginLeft: -donateImgW * clicker
    });
    console.log(clicker);
return false;
  })

})
