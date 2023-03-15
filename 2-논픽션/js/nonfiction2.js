$(document).ready(function(){

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let lastScrollTop = 0;
        $(".scroll p").text(parseInt(scrollTop));

    });

    // $("body").on("click",function(){
    //     $(".slide1").css({"transform":"translateY(-100vh"});
    //     $(".slide2").css({"transform":"translateY(-100vh)"});
    // });

    
    $("#main_img .slide1").addClass("effect");
    $("#main_img .slide1").siblings().removeClass("effect");
    $(".btn1").addClass("active");

    // $(".btn1").on("click",function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".slide1").animate({"top":"0"}).addClass("effect").siblings().removeClass("effect").animate({"top":"100vh"});
    //     $(".slide1 .main_txt").addClass("effect").siblings().removeClass("effect");
    // })
    // $(".btn2").on("click",function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".slide2").addClass("effect").siblings().removeClass("effect");
    //     $(".slide2 .main_txt").addClass("effect").siblings().removeClass("effect");
    // });
    // $(".btn3").on("click",function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".slide3").addClass("effect").siblings().removeClass("effect");
    //     $(".slide3 .main_txt").addClass("effect").siblings().removeClass("effect");
    // });
    // $(".btn4").on("click",function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".slide4").addClass("effect").siblings().removeClass("effect");
    //     $(".slide4 .main_txt").addClass("effect").siblings().removeClass("effect");
    // });

    var btn = $(".button > div")
    var nowbtn = 0;


    btn.on("click",function(){
        nowbtn = $(this).index() + 1;
        $(this).addClass("active").siblings().removeClass("active");
        $(".slide"+nowbtn).animate({"top":"0"}).addClass("effect").siblings().removeClass("effect").animate({"top":"100vh"});
        $(".slide"+nowbtn).find(".main_txt").addClass("effect").siblings().removeClass("effect");
    });

    // for( let i=1; i<=$("#main_img > .slide_container > div").length; i++ ){
    //     $(".slide"+i).addClass("effect").siblings().removeClass("effect") ;
    //     $(".slide"+i).find(".main_txt").addClass("effect").siblings().removeClass("effect");
    // };



// });

    var scrollTop = $(window).scrollTop;
    var offsetTop = $(".mag_contents_wrap").offsetTop;
    
    /* 마우스 휠로 매거진 가로 스크롤 */
    // if( scrollTop >= 964){
        $("html, body").mousewheel(function(e,d){

            $(".slide_container").scrollLeft -= ( d * 100 );
            e.preventDefault();
        });
    // }


    /* 모바일 햄버거 메뉴 */
    $("#mob_menu_box").on("click",function(){
        $("#mob_menu_all").toggleClass("fade_in"); 
        $(".open_cover").toggleClass("fade_in");
        $("span").eq(0).toggleClass("hamburger");
        $("span").eq(1).toggleClass("hamburger2");
        $("span").eq(2).toggleClass("hamburger3");
    });   


}); // 고정