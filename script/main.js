$(function(){

    // 메뉴영역
    $(".h_list > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".h_list > li").find(".sub").stop().slideUp();
    }) //



    // 슬라이드 이미지 영역

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();
    $(".fade li").eq(0).siblings().hide();
    
    var n = 0;
    setInterval(function(){
        n = (n + 1) % 3;
        console.log(n);
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
    },3000) //

    // siblings = 형제

    // 탭메뉴
    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on");
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});
    }) //click

    $(".p_up").click(function(){
        $(".pop").show();
    }) //
    $(".close").click(function(){
        $(".pop").hide();
    }) //

}) //