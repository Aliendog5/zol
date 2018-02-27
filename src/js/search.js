$(function(){
    $(".search1").load("http://127.0.0.1/zol/src/search.html",function(){
        $(".menu").on("mouseenter",function(){
            $(this).find("i").rotate(0,180);
            $(this).find("p").css("borderBottom",0);
            $(this).find("ul").css("display","block")
        });
        $(".menu").on("mouseleave",function(){
            $(this).find("i").rotate(180,0);
            $(this).find("p").css("borderBottom","1px solid #ccc");
            $(this).find("ul").css("display","none")
        });
       if($.cookie("PHPSESSID")!=null){
           $.ajax({
               url : "http://127.0.0.1/zol/server/php/cart.php",
               type : "post",
               dataType : "json"
           }).then(function(res){
               $(".search1 ol li").eq(2).find("span").text(JSON.parse(res).length);
           })
       }else {
           $(".search1 ol li").eq(2).find("span").text(JSON.parse($.cookie("list")||"[]").length);

       }


    })
})