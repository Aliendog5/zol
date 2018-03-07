
$("nav").load("nav.html",function(){
    $(".list ol").hide();
    $(".list").on("mouseenter",function(){
        $(".list ol").show();
    }).on("mouseleave",function(){
        $(".list ol").hide();
    })
    $(".list ol li").on("mouseenter",function(){
        $(".list ol div").eq($(this).index()).show().siblings("div").hide();
    }).on("click",function(){
        window.location.href="list.html?class1="+$(this).find("span").text()
    });
    $(".list ol").on("mouseleave",function(){
        $(this).find("div").hide()
    })
})