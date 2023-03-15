$(document).ready(function(){
    
    /* 모바일 햄버거 메뉴 */
    $("#mob_menu_box").on("click",function(){
        $("#mob_menu_all").toggleClass("fade_in"); 
        $(".open_cover").toggleClass("fade_in");
        $("span").eq(0).toggleClass("hamburger");
        $("span").eq(1).toggleClass("hamburger2");
        $("span").eq(2).toggleClass("hamburger3");
    });   
});