$(document).ready(function(){
    // 메뉴 솔루션 슬라이더
    $('.header-wrap > .nav-2-depth-wrap > .nav-2-depth > .right > .slider-wrap >.slider').slick({
      infinite: false,
      prevArrow: $(".header-wrap > .nav-2-depth-wrap > .nav-2-depth > .right > .slider-wrap >.prev-btn") ,
      nextArrow: $(".header-wrap > .nav-2-depth-wrap > .nav-2-depth > .right > .slider-wrap >.next-btn") ,
    })
    $(".header-wrap > .header > .nav-box > ul > li").hover(function(){
      let navboxNum = $(this).index()

      $(".header-wrap > .nav-2-depth-wrap").addClass("active")
      $(".header-wrap > .nav-2-depth-wrap .menu").eq(navboxNum).addClass("active")  
      
    })
    $(".header-wrap").mouseleave(function(){
      $(".header-wrap > .nav-2-depth-wrap").removeClass("active")
    })
    // 슬라이드 1
    $('.slider-wrap01 > .slider').slick({
    autoplay: 4000,
    arrows: false,
    });
    // 슬라이드 2
    $('.slider-wrap02 > .slider').slick({
      vertical: true,
      verticalSwiping: true,
      autoplay: 3000,
      arrows: false,
    })
    // 슬라이드 3
    $('.section02 > .slider-wrap03 >.slider').slick({
      slidesToShow: 4,
      SlidesToScroll: 1,
      swipeToSlide: true,
      infinite: false,
      prevArrow: $(".section02 > .slider-wrap03 > .prev-btn") ,
      nextArrow: $(".section02 > .slider-wrap03 > .next-btn") ,
    })


  });