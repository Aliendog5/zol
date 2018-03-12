
$("nav").load("nav.html",function(){
    $(".list1 ol").hide();
    $(".list1").on("mouseenter",function(){
        $(".list1 ol").show();
    }).on("mouseleave",function(){
        $(".list1 ol").hide();
    })
    $(".list1 ol li").on("mouseenter",function(){
        $(".list1 ol div").eq($(this).index()).show().siblings("div").hide();
    }).on("click",function(){
        window.location.href="list.html?class1="+$(this).find("span").text()
    });
    $(".list1 ol").on("mouseleave",function(){
        $(this).find("div").hide()
    })
})