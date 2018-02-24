$(function(){

    if($.cookie("PHPSESSID")){
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/cart.php",
            type:"post",
            dataType:"json",
            data:{
                userName:"daijunwang"
            }
        }).then(function(res){
            for(var i=0; i<JSON.parse(res).length; i++){
                $.ajax({
                    url:"http://127.0.0.1/zol/server/php/list.php",
                    type:"post",
                    dataType:"json",
                    data:{
                        id:JSON.parse(res)[i]
                    }
                }).then(function(res){
                    var data=res[0];
                    var $newTr=$('<tr data-info="'+data["id"]+'"><td class="good"><img src="'+data["img"]+'" alt=""><div><a href="#">'+data["name"]+'</a><p>颜色：'+data["color"]+'</p><p>  套装：'+data["info"]+'</p></div></td><td class="price">'+data["price"]+'</td><td class="num"><a href="#">-</a><span>'+data["num"]+'</span><a href="#">+</a></td><td> --</td><td class="money">'+(data["price"]*data["num"])+'</td><td class="caozuo"><a href="#" class="remove">删除</a></td></tr>');
                    $newTr.appendTo($("#tab"));
                    $(".remove").on("click",function(){
                        $(this).parents("tr").data("info");
                        $(this).parents("tr").remove()
                    })
                })
            }
        })
    }else {
        var list=JSON.parse($.cookie("list")||"[]")
        for(var i=0; i<list.length; i++){
            $.ajax({
                url:"http://127.0.0.1/zol/server/php/list.php",
                type:"post",
                dataType:"json",
                data:{
                    id:list[i]
                }
            }).then(function(res){
                var data=res[0]
                var $newTr=$('<tr data-info="'+data["id"]+'"><td class="good"><img src="'+data["img"]+'" alt=""><div><a href="#">'+data["name"]+'</a><p>颜色：'+data["color"]+'</p><p>  套装：'+data["info"]+'</p></div></td><td class="price">'+data["price"]+'</td><td class="num"><a href="#">-</a><span>'+data["num"]+'</span><a href="#">+</a></td><td> --</td><td class="money">'+(data["price"]*data["num"])+'</td><td class="caozuo"><a href="#" class="remove">删除</a></td></tr>');
                $newTr.appendTo($("#tab"));
                $(".remove").on("click",function(){
                    console.log($(this).parents("tr").data("info"));;
                    $(this).parents("tr").remove();
                    var arr=JSON.parse($.cookie("list"));
                    for(var i=0; i<arr.length; i++){
                        if(arr[i]==$(this).parents("tr").data("info")){
                            arr.splice(i,1)
                        }
                    }
                    $.cookie("list",JSON.stringify(arr))
                })
            })
        }
    }

})