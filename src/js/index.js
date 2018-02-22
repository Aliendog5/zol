$(function(){
    var $newOl=$("<ol></ol>")
    $newOl.appendTo($(".banner"))
        $newOl.css({
            position:"absolute",
    bottom:"20px",
    left:"50%"
        })
    $.each($(".banner ul li"),function(index,ele){
        var $newLi=$("<li></li>");
        $newLi.appendTo($newOl);
        if(index==0){
            $newLi.addClass("active")
        }
        $newLi.css({
                width:"10px",
        height:"10px",
        backgroundColor:"#fff",
        borderRadius:"50%",
        marginLeft:"30px",
            float:"left"
        });

        $newLi.on("mouseenter click",function(){
            num=$(this).index()
            $(this).addClass("active").siblings().removeClass("active");
            $(".banner ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000)
        })
    });
    //自动轮播
    var num=0;
    var timer=null;
    function autoPlay(){

        timer=setInterval(function(){
            num++;
            $(".banner ol li").eq(num%$(".banner ol li").length).addClass("active").siblings().removeClass("active");
            $(".banner ul li").eq(num%$(".banner ul li").length).fadeIn(1000).siblings().fadeOut(1000)
        },2000);
    }
    autoPlay();
    $(".banner").on("mouseenter",function(){
        clearInterval(timer)
    }).on("mouseleave",function(){
        autoPlay();
    })
})