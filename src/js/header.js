

    if($.cookie("PHPSESSID")!=null){

    }


    $("header").load("http://127.0.0.1/zol/src/header.html",function(){
        $(".my_li").on("mouseenter",function(){
            $(this).find("i").rotate(0,180)
        }).on("mouseleave",function(){
            $(this).find("i").rotate(180,0)
        })
    });