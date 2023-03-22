$(document).ready(function(){
    // Top 스크롤
    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 200 ) {
            $( '.top' ).fadeIn()
        } else {
            $( '.top' ).fadeOut()
        }
    })

    $('.top').click(function() {
        $('html, body').animate({ scrollTop : 0 }, 400 )
        return false
    } )

    // 포폴 웹사이트 모음
    $(".sub-sec01 > .main-box > .nav-box > .nav").click(function(){
        let num = $(this).index()
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
        $(".slider-wrap > .slider").eq(num).addClass("active")
        $(".slider-wrap > .slider").eq(num).siblings().removeClass("active")
        // $(".site-page").ep(num).addClass("active")
        // $(".site-page").ep(num).siblings().removeClass("active")
        $(".site-page").eq(num).addClass("active")
        $(".site-page").eq(num).siblings().removeClass("active")

    })

    // sub 슬라이드
    $(".slider").slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed: 4000,
      })
    // 이전 그림
      $(".pre-btn").click(function(){
        $('.slider').slick('slickPrev')
      })
    // 이후 그림
      $(".next-btn").click(function(){
        $('.slider').slick('slickNext')
      })
    
    // 앱 디자인 팝업
    $(".app-wrap > ul > li").click(function(){
        let popupnum = $(this).index()
        console.log(popupnum)
        $(".popup-wrap").addClass("active")
        $(".popup-wrap > .popup").eq(popupnum).addClass("active")
    })
    $(".popup-wrap > .popup > .close-btn").click(function(){
        $(".popup-wrap").removeClass("active")
        $(".popup").removeClass("active")
    })
    
    
    
})