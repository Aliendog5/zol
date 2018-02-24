$(function(){
    $(".all ul li").eq($("select option:selected").index()).show().siblings("li").hide();
    $(".all select").on("change",function(){
        $(".all ul li").eq($(".all select option:selected").index()).show().siblings("li").hide().find("input").attr("checked",false);
        var str="class1='"+$(this).val()+"'"
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/list.php",
            type:"post",
            dataType:"json",
            data:{
                id:str
            }
        }).then(function(res){
            $(".list_menu ol").html("")
            for(var i=0; i<res.length; i++){
                $("<li data-info='"+res[i]["id"]+"'><img src='"+res[i]["img"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
                /*<li data-info="1">
                        <img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
                        <h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
                    <p class="price">¥2699.00</p>

                    </li>*/
            }
            $(".list_menu ol li").on("click",function(){
                window.location.href="http://127.0.0.1/zol/src/info.html?id="+$(this).data("info")
            })
        })
    });
    $(".all ul li input").on("click",function(){

        if($(this).parent().find("input:checked").length!=0){
            var str="class1='"+$(".all select option").eq($(this).parent().index()).val()+"' and (";
            for(var i=0; i<$(this).parent().find("input:checked").length; i++){
                str+="class2='"+$(this).parent().find("input:checked")[i].value+"' or "
            }
            str=str.replace(/or\s$/,')');
        }else {
            var str="class1='"+$(".all select option").eq($(this).parent().index()).val()+"'"
        }
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/list.php",
            type:"post",
            dataType:"json",
            data:{
                id:str
            }
        }).then(function(res){
            $(".list_menu ol").html("")
            for(var i=0; i<res.length; i++){
                $("<li data-info='"+res[i]["id"]+"'><img src='"+res[i]["img"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
                /*<li data-info="1">
                        <img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
                        <h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
                    <p class="price">¥2699.00</p>

                    </li>*/
            }
            $(".list_menu ol li").on("click",function(){
                window.location.href="http://127.0.0.1/zol/src/info.html?id="+$(this).data("info")
            })
        })
    })
    $.ajax({
        url:"http://127.0.0.1/zol/server/php/list.php",
        type:"post",
        dataType:"json",
        data:{
            id:"all"
        }
    }).then(function(res){
        for(var i=0; i<res.length; i++){
            $("<li data-info='"+res[i]["id"]+"'><img src='"+res[i]["img"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
        /*<li data-info="1">
                <img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
                <h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
            <p class="price">¥2699.00</p>

            </li>*/
        }
        $(".list_menu ol li").on("click",function(){
            window.location.href="http://127.0.0.1/zol/src/info.html?id="+$(this).data("info")
        })
    })

})