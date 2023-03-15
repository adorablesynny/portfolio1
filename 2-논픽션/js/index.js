$(document).ready(function(){


    // 스크롤
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let lastScrollTop = 0;
        $(".scroll p").text(parseInt(scrollTop));
    });

    // 메인 슬라이드
    $("#main_img .slide1").addClass("effect");
    $("#main_img .slide1").siblings().removeClass("effect");
    $(".btn1").addClass("active");

    var btn = $(".button > div")
    var nowbtn = 0;


    btn.on("click",function(){
        nowbtn = $(this).index() + 1;
        $(this).addClass("active").siblings().removeClass("active");
        $(".slide"+nowbtn).animate({"top":"0"}).addClass("effect").siblings().removeClass("effect").animate({"top":"100vh"});
        $(".slide"+nowbtn).find(".main_txt").addClass("effect");
        $(".slide"+nowbtn).siblings().find(".main_txt").removeClass("effect");
    });

    /* 모바일 햄버거 메뉴 */
    $(".mob_menu_box").on("click",function(){
        $("#mob_menu_all").toggleClass("fade_in"); 
        $(".open_cover").toggleClass("fade_in");
        $("span").eq(0).toggleClass("hamburger");
        $("span").eq(1).toggleClass("hamburger2");
        $("span").eq(2).toggleClass("hamburger3");
    });   

    // 매거진 슬라이드
    function loof(){
        $(".mag_contents_wrap").animate({
                left:"-14vw"
                },{
                complete:function(){
                    var $clone = $(".mag_contents_in").first().clone();
                    $(".mag_contents_wrap").append($clone);
                    $(".mag_contents_in").first().remove();
                    $(".mag_contents_wrap").css("left","0");
                },
                duration:3000,
                easing:"linear"                
            });
    }

    setInterval(loof, 1000);
    
});




  //마우스 휠 굴렸을 때 한 섹션 이동
window.onload = function () {
    var section = $("section");

    $(section).each(function (i) {

        $(this).on("mousewheel MouseScroll", function (a) {
            a.preventDefault();
            let nowScroll = 0,
                eWheel = event.wheelDelta,
                eDetail = event.detail;

            if ( eWheel ) {
                nowScroll = eWheel;
                if (window.opera) nowScroll = -nowScroll;
            } 
            else if (eDetail)
                nowScroll = -eDetail;
            var scrollMove = $(window).scrollTop();
            var sectionSelecter = $(section).eq(i);

            // 위에서 아래로
            if (nowScroll < 0) {
                if ($(sectionSelecter).next() != undefined) {
                    scrollMove = $(sectionSelecter).next().offset().top - 124+"vh";
                }
            // 아래에서 위로
            } else {
                if ($(sectionSelecter).prev() != undefined) {
                    scrollMove = $(sectionSelecter).prev().offset().top;      
                }
            }

            // 화면 이동
            $("html,body").stop().animate({
                scrollTop: scrollMove + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
} 

/*
  //마우스 휠 굴렸을 때 한 섹션 이동
  window.onload = function () {
    var section = $("section");

    $(section).each(function (i) {

        $(this).on("mousewheel MouseScroll", function (a) {
            a.preventDefault();
            var nowScroll = 0;

            if ( event.wheelDelta ) {
                nowScroll = event.wheelDelta;
                if (window.opera) nowScroll = -nowScroll;
            } 
            else if (event.detail)
                nowScroll = -event.detail;
            var scrollMove = $(window).scrollTop();
            var sectionSelecter = $(section).eq(i);

            // 위에서 아래로
            if (nowScroll < 0) {
                if ($(sectionSelecter).next() != undefined) {
                    scrollMove = $(sectionSelecter).next().offset().top - 124+"vh";
                }
            // 아래에서 위로
            } else {
                if ($(sectionSelecter).prev() != undefined) {
                    scrollMove = $(sectionSelecter).prev().offset().top;      
                }
            }

            // 화면 이동
            $("html,body").stop().animate({
                scrollTop: scrollMove + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
} */