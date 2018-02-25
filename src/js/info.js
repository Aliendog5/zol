$(function(){
    var data=window.location.href.split("?")[1].split("=")[1];
    $.ajax({
        url:"http://127.0.0.1/zol/server/php/info.php",
        type:"post",
        dataType:"json",
        data:{
            id:data
        }
    }).then(function(res){
        var json=JSON.parse(res);
        $(".info img").attr("src",json["img"]);
        $(".right h2").text(json["name"]);
        $(".right p span").text("￥"+json["price"]);
    })
    $("#btn").on("click",function(){
        if($.cookie("PHPSESSID")){
            $.ajax({
                url:"http://127.0.0.1/zol/server/php/cart.php",
                type:"post",
                dataType:"json",
                data:{
                    id:data
                }
            }).then(function(res){
                console.log(res);
            })
        }else {
            var arr=JSON.parse($.cookie("list")||"[]");
            arr.push(Number(data));
        $.cookie("list",JSON.stringify(arr))
        }
    })
})