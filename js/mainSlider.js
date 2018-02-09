//***problem***
//1.cloning the first img to the last section(not to be turned back to the first from the last)
//2.when another slide is active, the other one should be reset
$(function(){
   slide01Action();
   $('#slide02').css({'display':'none'});
   slide02Action();

   $('#slide01 .right_tab').on('click',function(e){
      e.preventDefault();
      $('#slide01').css({'display':'none'});
      $('#slide02').css({'display':'block'});
   })

   $('#slide02 .left_tab').on('click',function(e){
      e.preventDefault();
      $('#slide02').css({'display':'none'});
      $('#slide01').css({'display':'block'});
   })
})

//******상설전시 슬라이드 활성화******
function slide01Action(){
   // if($('#slide01').css('display') === 'none'){
   //    // clearInterval(play_01);
   //    alert(1);
   // }else{
   //    // play_01 = setInterval(gallery_01,2000);
   //    alert(2);
   // }

   //상설/특별전시탭 활성화
   $('#slide01 .left_tab').addClass('selected');

   var flag_01 = true;
   var imgWidth = $('.wrap').width();
   var imgLength_01 = $('#slide01 .wrap img').length;
   console.log("이미지폭: " + imgWidth + ", 이미지수: " + imgLength_01);

   var page_01 = imgLength_01;
   console.log("페이지버튼 수:" + page_01);

   //페이지버튼 초기화
   for(var i = 0; i < page_01; i++){
      $('#slide01 .paging').append('<li><a href="#none">'+(i+1)+'</a></li>');
      if(i==0){
         $('#slide01 .paging li:eq(0) a').addClass('active');
      }
   }

   // var copyImg = $('li:lt(1)').clone();
   // $('.slide_contents ul').append(copyImg);
   // console.log(copyImg.src());

   //이전/다음버튼 초기화
   var arrow_01 = $('#slide01 .next');

   //자동재생 처리(gallery_01 함수 호출)
   play_01 = setInterval(gallery_01, 2000)

   var i = 0;
   //이미지 슬라이드 처리
   function gallery_01(){
      if(flag_01){
         flag_01 = false;//비활성화
         //페이징 활성화 상태 초기화
         $('#slide01 .paging a').removeClass('active');
         if(arrow_01.hasClass('prev')){
            i--;//이전일 경우 감소
         }else{
            i++;//다음일 경우 증가
         }
         //무한대로 증가, 감소하는 것을 막아줌.
         if(i<0){i=page_01-1;}
         if(i>=page_01){i=0;}
         $('#slide01 .slide_contents>ul').animate({'left':-(i*imgWidth)},1000, function(){flag_01=true;});//애니메이션 종료후 다시 활성화 상태

         //해당 페이징 활성화
         $('#slide01 .paging a').eq(i).addClass('active');
         //console.log('인덱스값' + i);
      }
   }


   //갤러리 정지
   function stop_01(){
      $('#slide01 .stop').hide();
      $('#slide01 .play').css({'display':'block'});
      clearInterval(play_01);
   }

   //이전/다음 버튼
   $('#slide01 .arrow').click(function(e){
      e.preventDefault();
      arrow_01 = $(this);//이전, 다음
      stop_01();//자동으로 롤링되고 있는 이미지를 정지
      gallery_01();//사용자가 제어하는 이미지 롤링
   })

   //재생버튼
   $('#slide01 .play').click(function(e){
      e.preventDefault();
      //재생버튼 누르면 무조건 다음이미지로 롤링
      arrow_01 = $('#slide01 .next');
      $(this).hide();
      $('#slide01 .stop').show();
      //만약 자동재생되는 상태가 계속 유지되고 있을 경우
      clearInterval(play_01);
      play_01 = setInterval(gallery_01,2000);
   })

   //정지버튼
   $('#slide01 .stop').click(function(e){
      e.preventDefault();
      stop_01();
   })

   //페이징 버튼
   $('#slide01 .paging').on('click','a',function(e){
      e.preventDefault();
      //자동 슬라이딩 정지
      stop_01();
      //활성화 상태 초기화
      $('#slide01 .paging a').removeClass('active');

      var index = $('#slide01 .paging a').index(this);
      $('#slide01 .paging a').eq(index).addClass('active');
      $('#slide01 .slide_contents ul').animate({left:-(index*imgWidth)},1000);
      i = index;
   })
}

//******특별전시 슬라이드 활성화******
function slide02Action(){
   // if($('#slide02').css('display') === 'none'){
   //    alert(1);
   //    clearInterval(play_02);
   // }else{
   //    alert(2);
   //    play_02 = setInterval(gallery_02,2000);
   // }

   //상설/특별전시탭 활성화
   $('#slide02 .right_tab').addClass('selected');

   var flag_02 = true;
   var imgWidth = $('.wrap').width();
   var imgLength_02 = $('#slide02 .wrap img').length;
   console.log("이미지폭: " + imgWidth + ", 이미지수: " + imgLength_02);

   var page_02 = imgLength_02;
   console.log("페이지버튼 수:" + page_02);

   //페이지버튼 초기화
   for(var i = 0; i < page_02; i++){
      $('#slide02 .paging').append('<li><a href="#none">'+(i+1)+'</a></li>');
      if(i==0){
         $('#slide02 .paging li:eq(0) a').addClass('active');
      }
   }

   // $('.next').on('click',function(){
   //    $('.slide_contents>ul').animate({'left':-(imgWidth)});
   // })

   // var copyImg = $('li:lt(1)').clone();
   // $('.slide_contents ul').append(copyImg);
   // console.log(copyImg.src());

   //이전/다음버튼 초기화
   var arrow_02 = $('#slide02 .next');

   //자동재생 처리(gallery_02 함수 호출)
   play_02 = setInterval(gallery_02, 2000)

   var i = 0;
   //이미지 슬라이드 처리
   function gallery_02(){
      if(flag_02){
         flag_02 = false;//비활성화
         //페이징 활성화 상태 초기화
         $('#slide02 .paging a').removeClass('active');
         if(arrow_02.hasClass('prev')){
            i--;//이전일 경우 감소
         }else{
            i++;//다음일 경우 증가
         }
         //무한대로 증가, 감소하는 것을 막아줌.
         if(i<0){i=page_02-1;}
         if(i>=page_02){i=0;}
         $('#slide02 .slide_contents>ul').animate({'left':-(i*imgWidth)},1000, function(){flag_02=true;});//애니메이션 종료후 다시 활성화 상태

         //해당 페이징 활성화
         $('#slide02 .paging a').eq(i).addClass('active');
         //console.log('인덱스값' + i);
      }
   }


   //갤러리 정지
   function stop_02(){
      $('#slide02 .stop').hide();
      $('#slide02 .play').css({'display':'block'});
      clearInterval(play_02);
   }

   //이전/다음 버튼
   $('#slide02 .arrow').click(function(e){
      e.preventDefault();
      arrow_02 = $(this);//이전, 다음
      stop_02();//자동으로 롤링되고 있는 이미지를 정지
      gallery_02();//사용자가 제어하는 이미지 롤링
   })

   //재생버튼
   $('#slide02 .play').click(function(e){
      e.preventDefault();
      //재생버튼 누르면 무조건 다음이미지로 롤링
      arrow_02 = $('#slide02 .next');
      $(this).hide();
      $('#slide02 .stop').show();
      //만약 자동재생되는 상태가 계속 유지되고 있을 경우
      clearInterval(play_02);
      play_02 = setInterval(gallery_02,2000);
   })

   //정지버튼
   $('#slide02 .stop').click(function(e){
      e.preventDefault();
      stop_02();
   })

   //페이징 버튼
   $('#slide02 .paging').on('click','a',function(e){
      e.preventDefault();
      //자동 슬라이딩 정지
      stop_02();
      //활성화 상태 초기화
      $('#slide02 .paging a').removeClass('active');

      var index = $('#slide02 .paging a').index(this);
      $('#slide02 .paging a').eq(index).addClass('active');
      $('#slide02 .slide_contents ul').animate({left:-(index*imgWidth)},1000);
      i = index;
   })
}
