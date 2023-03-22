$(document).ready(function(){
    // AOS
    AOS.init();

    // 메인 슬라이더
    $('.section01 > .slider-wrap > .slider').slick({
        autoplay: 800,
        cssEase: 'linear',
        arrows: false,
        fade: true,
    })
    $(".section01 > .slider-wrap > .prev-btn").click(function(){
        //     슬라이드가 이전으로 간다.
        $('.section01 > .slider-wrap > .slider').slick('slickPrev');
      })
    $(".section01 > .slider-wrap > .next-btn").click(function(){
        //     슬라이드가 다음으로 간다.
        $('.section01 > .slider-wrap > .slider').slick('slickNext');
      })
    // 슬라이더 2  
    $('.section03 > .content-box > .slider-wrap > .slider').slick({
      cssEase: 'linear',
      arrows: false,
      fade: true,
    })
    $(".section03 > .content-box > .prev-btn").click(function(){
      $('.section03 > .content-box > .slider-wrap > .slider').slick('slickPrev');
    })
  $(".section03 > .content-box > .next-btn").click(function(){
      $('.section03 > .content-box > .slider-wrap > .slider').slick('slickNext');
    })

    let indexNum = $(this).index()

// 브랜드 리스트
$('.section05 > .content-box > .right-content > .nav-box > .btn').click(function(){
    
    $(this).addClass("active")
    $(this).siblings().removeClass("active")

  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).addClass("active")
  $('.section05 > .content-box > .right-content > .logo-list-box').eq(indexNum).siblings().removeClass("active")
})

// 모바일 메뉴
$(".mobile-top-bar-wrap > .service-box .fa-bars").click(function(){
  $(".nav-2-depth-wrap").addClass("active")
})
  $(".nav-2-depth-wrap > .menu-box > ul > div > i").click(function(){
    $(".nav-2-depth-wrap").removeClass("active")
  })

  $(".mobile-top-bar-wrap > .service-box .fa-bars").click(function(){
    $(".nav-2-depth-wrap .menu-box").addClass("active")
  })
  $(".nav-2-depth-wrap-bg").click(function(){
    $(".nav-2-depth-wrap .menu-box").removeClass("active")
    $(".nav-2-depth-wrap").removeClass("active")
  })

  // 메뉴박스 리스트 아이템(li)을 클릭했을 때
  $(".menu-box ul > li ").click(function(){
    
    // 여러 li 중에서 내가 클릭한 li를 찾아내는 $(this)
    let $this = $(this);

    // 클릭한 li의 형제 중 열려 있는 메뉴(ul)를 모두 닫는다. (안에 있는 메뉴까지)
    $this.siblings(".active").find("ul").stop().slideUp(300);
    
    // 클릭한 li의 형제의 active 클래스를 제거
    $this.siblings(".active").removeClass("active");

    // 만약 클릭한 li가 active 클래스를 가지고 있다면(열려 있다면)
    if($this.hasClass("active")){
      
      // active 클래스를 제거해라 (열려 있다는 의미를 제거)
      $this.removeClass("active");
      
      // 열려 있는 모든 메뉴(ul)을 닫는다. (안에 있는 메뉴까지)
      $this.find("ul").stop().slideUp(300);
      
    }
    
    // active 클래스를 가지고 있지 않다면(닫혀 있다면)
    else {
      
      // active 클래스를 추가해라 (열려 있다는 의미를 표시, if문을 사용하기 위해 추가)
      $this.addClass("active");
      
      // 클릭한 li의 자식 메뉴(ul)만 연다.
      $this.find(" > ul").stop().slideDown(300);
      
    }

    // li를 클릭했을 때 닫히는 현상을 수정하는 역할(없을 경우, 2차 메뉴 아이템(li)을 클릭했을 때 1차 메뉴가 닫힌다.)
    // ul에서 return false. 차단하여 함수가 전달되지 않도록 함.
    $(".menu-box ul").click(function(){
      return false;
    });
    
  });

})