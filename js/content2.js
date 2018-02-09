$(function() {

  cbox4_slide();

  // cobx6 slide start
  var active_slide = 0,
    dom_slides = $('.cbox6-slide a'),
    num_slides = dom_slides.length;

    //  slide start
  var start = setInterval(function() {
    // 페이징 초기화
    $('.cbox6-slide-button>div>a').eq(active_slide-1).removeClass('active');
    // 버튼 활성화
    $('.cbox6-slide a:first-child').addClass("active");

    // 슬라이드
    ++active_slide;
    dom_slides.removeClass('active').eq(active_slide).addClass('active');
    if(active_slide==7){
      active_slide=1;
        dom_slides.removeClass('active').eq(active_slide).addClass('active');
    }

    // 페이지 index 따라 button index 같게 하기
   $('.cbox6-slide-button>div>a').eq(active_slide-1).addClass('active');
   console.log("index : "+active_slide);
        // console.log(active_slide);
  }, 2000);

  //  페이징 처리
  $('.cbox6-slide-button>div>a').on('click',function() {
     // 자동 슬라이드 정지
     clearInterval(start);
     // 초기화
     // 버튼 활성화 상태 초기화
     $('.cbox6-slide-button>div>a').removeClass('active');

     var index = $('.cbox6-slide-button>div>a').index(this);
     $('.cbox6-slide-button>div>a').eq(index).addClass('active');
     i = index+1; // 슬라이드 이미지의 인덱스를 페이징 버튼의 인덱
     dom_slides.removeClass('active').eq(i).addClass('active');
     return false;

  })

  //정지 함수
  function slide_stop(){
     $('.cbox6-slide-stop span').removeClass('stop');
     $('.cbox6-slide-stop span').addClass('start');
     clearInterval(start);
  }

  // 정지버튼
  $('.cbox6-slide-stop span.stop').click(function(){
        slide_stop();
        return false;
  }) // click end


  //재생 버튼s
  $('.cbox6-slide-stop span.start').click(function(e){
     e.preventDefault();
     $(this).removeClass('start');
     $('.cbox6-slide-stop span').addeClass('stop');
     clearInterval(start);
     start();
  })

}); //document function end





// cbox4_slide
function cbox4_slide() {
  $('.cbox4-slide a:first-child').addClass("active");
  // right button
  var active_slide = 0,
    dom_slides = $('.cbox4-slide a'),
    num_slides = dom_slides.length;
  $('.cbox4-slide-button a:last-child').click(function() {
    ++active_slide;
    dom_slides.removeClass('active').eq(active_slide).addClass('active');
    if (active_slide == 5) {
      active_slide = 0;
      dom_slides.removeClass('active').eq(active_slide).addClass('active');
    }
    return false;
  })
  // left button
  var active_slide = 0,
    dom_slides = $('.cbox4-slide a'),
    num_slides = dom_slides.length;
  $('.cbox4-slide-button a:first-child').click(function() {
    --active_slide;
    dom_slides.removeClass('active').eq(active_slide).addClass('active');
    // console.log(active_slide);
    if (active_slide == -5) {
      active_slide = 0;
      dom_slides.removeClass('active').eq(active_slide).addClass('active');
    }
    return false;
  })
}
