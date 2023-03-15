
/* 배너 이미지 슬라이드 */
const swiper = new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 4000,
    },
    loop:true,
    effect:'fade',
        fadeEffect:{
        crossFde:true
    },
});

/* 배너메뉴 검색창 */
var searchBtn = $(".banner_menu ul li.search a");

searchBtn.on("click",function(){
    $(".banner_menu div.search-area").toggleClass("show");
    
});

/* 영화 차트 탭 메뉴 */
var movBtn = $(".movie-title > ul > li");
var movCont = $(".movie-chart > div");

movCont.hide().eq(0).show();
movBtn.eq(0).addClass("active");

movBtn.on("click",function(e){
    e.preventDefault();
    
    var target = $(this);
    var index = target.index();

    movBtn.removeClass("active");
    target.addClass("active");
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});


/* 영화 차트 이미지 슬라이드 - 박스오피스 */
const myswiper = new Swiper('.swiper2', {
        slidesPerView: 2,
        spaceBetween: 10,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        660: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        768: {
            slidesPerView:3.6,
            spaceBetween: 20
        },
        996: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1290: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});

/* 특별 상영관 탭 */
$(".royal1").on("mouseover",function(e){
    $(".royal-pic1").addClass("show").siblings().removeClass("show");
})
$(".royal2").on("mouseover",function(e){
    $(".royal-pic2").addClass("show").siblings().removeClass("show");
})
$(".royal3").on("mouseover",function(e){
    $(".royal-pic3").addClass("show").siblings().removeClass("show");
})
$(".royal4").on("mouseover",function(e){
    $(".royal-pic4").addClass("show").siblings().removeClass("show");
})


/* 공지사항 탭 */
var tabMenu = $(".notice");

//컨텐츠 내용 숨기기
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
    e.preventDefault();

    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    //target의 next는 li(전체공지/ 영화관 공지) 안의 ul 
}

tabMenu.find("ul > li > a").click(tabList);


/* 위로가기 버튼 */

$(".btn-gotoTop").on("click",function(e){
    e.preventDefault();
    let offset = $("#header").offset().top;
    $("html").animate({scrollTop:offset},300);
});

$(window).on("scroll",function(){
    let scrollTop = $("html").scrollTop();
    if(scrollTop <= 30){
        $(".btn-gotoTop").addClass("hide");
    }else{
        $(".btn-gotoTop").removeClass("hide");
    }
});
