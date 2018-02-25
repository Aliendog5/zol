


$("header").load("http://127.0.0.1/zol/src/header.html", function(){
    $(".my_li").on("mouseenter", function(){
        $(this).find("i").rotate(0, 180)
    }).on("mouseleave", function(){
        $(this).find("i").rotate(180, 0)
    })
    if($.cookie("PHPSESSID") != null){
        $(".user li").eq(1).html("您好<a href='#'>"+$.cookie("PHPSESSID")+"</a>");
        $(".user li").eq(2).html("<a href='#'>退出</a>");
        $(".user li").eq(2).find("a").on("click",function(){
            $.ajax({
                url:"http://127.0.0.1/zol/server/php/out.php",

            })
        })
    }
});