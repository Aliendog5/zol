
    $("nav").load("http://127.0.0.1/zol/src/nav.html",function(){
            $(".list ol li").on("mouseenter",function(){
                $(".list ol div").eq($(this).index()).show().siblings("div").hide();
            })
            $(".list ol").on("mouseleave",function(){
                $(this).find("div").hide()
            })
    })