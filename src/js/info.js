requirejs(["config"],function(){
    requirejs(["jquery","jquery-cookie","transform"],function($){
        $(function(){
            requirejs(["header","search","nav1","footer_index","copy","aside"]);
            // 向后台获取数据
            (function(){
                var id = window.location.href.split("?")[1].split("=")[1];
                $.ajax({
                    url : "../server/php/list_1.php",
                    type : "post",
                    dataType : "json",
                    data : {
                        id : id
                    }
                }).then(function(res){
                    //放大镜

                    var obj = res[0];
                    for(var key in obj){
                        if(obj[key]!=null){
                            switch(key){
                                case "img":
                                    // 动态获取图片，并绑定点击事件
                                    var imgArr = JSON.parse(obj["img"]);
                                    for(var i = 0; i < imgArr.length; i++){
                                        if(i == 0){
                                            $('<li class="active"><img src="images/img/' + imgArr[i] + '" alt=""></li>').appendTo($(".info .left ul"));
                                            $(".info .left .smallImg img").attr("src", "images/img/" + imgArr[i].replace(/.jpg$/g, "x400.jpg").replace(/.png$/g,"x400.png"));
                                            $(".info .left .bigArea .bigImg").attr("src", "images/img/" + imgArr[i].replace(/.jpg$/g, "x800.jpg").replace(/.png$/g,"x800.png"))
                                        } else {
                                            $('<li><img src="images/img/' + imgArr[i] + '" alt=""></li>').appendTo($(".info .left ul"));
                                        }
                                    }
                                    $(".info .left ul li").on("click", function(){
                                        $(this).addClass("active").siblings().removeClass("active");
                                        $(".info .left .smallImg img").attr("src", $(this).find("img").attr("src").replace(/.jpg$/g, "x400.jpg").replace(/.png$/g,"x400.png"));
                                        $(".info .left .bigImg").attr("src", $(this).find("img").attr("src").replace(/.jpg$/g, "x800.jpg").replace(/.png$/g,"x800.png"));
                                    });
                                    break;
                                case "name":
                                    $(".info .right h2").text(obj["name"]);
                                    break;
                                case "msg":
                                    $(".info .right .msg").text(obj["msg"]);
                                    break;
                                case "price":
                                    $(".info .right .price em").text(obj["price"]);
                                    break;
                                case "promotion":
                                    $(".info .right .promotion span").html("促&emsp;&emsp;销：")
                                    $("<i>赠品</i>").prependTo($(".info .right .promotion .content"));
                                    var arr = JSON.parse(obj["promotion"]);
                                    for(var i = 0; i < arr.length; i++){
                                        if(i == arr.length - 1){
                                            $('<img src="images/img/' + arr[i] + '" alt=""><em>x1 </em>').appendTo($(".info .right .promotion .content"));
                                        } else {
                                            $('<img src="images/img/' + arr[i] + '" alt=""><em>x1 +</em>').appendTo($(".info .right .promotion .content"));
                                        }

                                    };
                                    break;
                                case "evaluation":
                                    $(".info .right .evaluation span").html("评&emsp;&emsp;价：");
                                    $(".evaluation_left").html("购买评价 <i>"+JSON.parse(obj["evaluation"])[0]+"</i>");
                                    $(".evaluation_right").html("购买评价 <i>"+JSON.parse(obj["evaluation"])[1]+"</i>");
                                    break;
                                case "edition":
                                    //edition
                                    $(".info .right .edition span").html("版&emsp;&emsp;本：");
                                    for(var i = 0; i < JSON.parse(obj["edition"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["edition"])[i] + ' <i></i></p>').appendTo($(".edition .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["edition"])[i] + ' <i></i></p>').appendTo($(".edition .content"))
                                        }
                                    }
                                    break;
                                case "goodsColor":
                                    $(".info .right .goodsColor span").html("商品颜色：");
                                    for(var i = 0; i < JSON.parse(obj["goodsColor"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["goodsColor"])[i] + ' <i></i></p>').appendTo($(".goodsColor .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["goodsColor"])[i] + ' <i></i></p>').appendTo($(".goodsColor .content"))
                                        }
                                    }
                                    break;
                                case "colorSuit":
                                    $(".info .right .colorSuit span").html("颜色类别：")
                                    for(var i = 0; i < JSON.parse(obj["colorSuit"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["colorSuit"])[i] + ' <i></i></p>').appendTo($(".colorSuit .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["colorSuit"])[i] + ' <i></i></p>').appendTo($(".colorSuit .content"))
                                        }
                                    }
                                    break;
                                case "ram":
                                    $(".info .right .ram span").html("内存容量：")
                                    for(var i = 0; i < JSON.parse(obj["ram"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["ram"])[i] + ' <i></i></p>').appendTo($(".ram .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["ram"])[i] + ' <i></i></p>').appendTo($(".ram .content"))
                                        }
                                    }
                                    break;
                                case "method":
                                    $(".info .right .method span").html("购买方式：")
                                    for(var i = 0; i < JSON.parse(obj["method"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["method"])[i] + ' <i></i></p>').appendTo($(".method .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["method"])[i] + ' <i></i></p>').appendTo($(".method .content"))
                                        }
                                    };
                                    break;
                                case "suit":
                                    $(".info .right .suit span").html("套&emsp;&emsp;装：")
                                    for(var i = 0; i < JSON.parse(obj["suit"]).length; i++){
                                        if(i == 0){
                                            $('<p class="active">' + JSON.parse(obj["suit"])[i]["name"] + ' <i></i></p><h3 class="active">' + JSON.parse(obj["suit"])[i]["msg"] + '</h3>').appendTo($(".suit .content"))
                                        } else {
                                            $('<p>' + JSON.parse(obj["suit"])[i]["name"] + ' <i></i></p><h3>' + JSON.parse(obj["suit"])[i]["msg"] + '</h3>').appendTo($(".suit .content"))
                                        }
                                    };
                                    break;
                                case "num":
                                    $(".num strong i").text(obj["num"]);
                                    break;
                            }
                        }
                    }

                    //给动态生成的元素绑定事件
                    //选择项
                    $(".edition,.goodsColor,.ram,.method,.suit,.colorSuit").find("p").on("click", function(){
                        $(this).addClass("active").siblings().removeClass("active")
                    });
                    $(".suit p").on("click", function(){
                        $(this).next("h3").addClass("active").siblings("h3").removeClass("active");
                    });
                    // 改变商品数量
                    $(".info .num .del").on("click", function(){
                        $(".info .num .count").text($(".info .num .count").text() <= 1 ? 1 : $(".info .num .count").text() - 1)
                    })
                    $(".info .num .add").on("click", function(){
                        $(".info .num .count").text($(".info .num .count").text() >= Number($(this).next("strong").find("i").text()) ? $(this).next("strong").find("i").text() : 1 + Number($(".info .num .count").text()))
                    })

                    // 加入购物车事件
                    $(".addToCart").on("click", function(){
                        var data = {
                            id : id,
                            color : $(".info .right .goodsColor .active").text(),
                            suit : $(".info .right .suit p.active").text(),
                            num : $(".info .right .num .count").text()
                        };
                        //判断登录状态
                        $.ajax({
                            url:"../server/php/loginStatus.php"
                        }).then(function(res){
                            console.log(res);
                            if(res=="true"){
                                $.ajax({
                                    url : "../server/php/cart.php",
                                    type : "post",
                                    dataType : "json",
                                    data : data
                                }).then(function(res){

                                    if(res=="成功"){
                                        alert("操作成功");

                                        $(".slide_aside ul li").eq(2).find("a span").text(Number($("header .cart span").text())+Number($(".info .right .num .count").text()));
                                        $(".cart span").text(Number($("header .cart span").text())+Number($(".info .right .num .count").text()));
                                    }

                                });


                            } else {
                                var arr = JSON.parse($.cookie("list") || "[]");
                                var flag = true;
                                for(var i = 0; i < arr.length; i++){
                                    if(arr[i]["id"] == data["id"]){
                                        arr[i]["num"] = Number(data["num"]) + Number(arr[i]["num"]);
                                        flag = false;
                                    }
                                }
                                if(flag){
                                    arr.push(data)
                                }
                                alert("操作成功");
                                $(".search1 ol li").eq(2).find("span").text(Number($(".search1 ol li").eq(2).find("span").text())+Number($(".info .right .num .count").text()));
                                $(".cart span").text(Number($(".search1 ol li").eq(2).find("span").text())+Number($(".info .right .num .count").text()));
                                $(".slide_aside ul li").eq(2).find("a span").text(Number($(".search1 ol li").eq(2).find("span").text())+Number($(".info .right .num .count").text()));
                                $.cookie("list", JSON.stringify(arr))
                            }
                        })

                    })
                });
            })();
            //放大镜功能
            (function(){

                //鼠标进入小图
                $(".smallImg").on("mouseenter", function(){
                    $(".bigArea").show();
                    $(".smallArea").show();

                    $(".smallImg").on("mousemove", function(evt){
                        var disX = evt.pageX, disY = evt.pageY;
                        var x = disX - $(".smallImg").offset().left - $(".smallArea").width() / 2,
                            y = disY - $(".smallImg").offset().top - $(".smallArea").height() / 2;
                        x = x <= 0 ? 0 : x;
                        x = x >= $(".smallImg").width() - $(".smallArea").width() ? $(".smallImg").width() - $(".smallArea").width() : x;
                        y = y <= 0 ? 0 : y;
                        y = y >= $(".smallImg").height() - $(".smallArea").height() ? $(".smallImg").height() - $(".smallArea").height() : y;
                        $(".smallArea").css({
                            left : x,
                            top : y
                        });
                        $(".bigImg").css({
                            left : -x * 2,
                            top : -y * 2
                        });

                    })
                }).on("mouseleave", function(){
                    $(".bigArea").hide();
                    $(".smallArea").hide();
                })
            })();

            //
            (function(){
                $(".delivery i").on("click",function(){
                    $(this).siblings(".menu").toggleClass("hide");
                });
                $(".delivery .menu ul li").on("click",function(){
                    if(!$(this).hasClass("active")){
                        $(this).addClass("active").siblings().removeClass("active");
                    }

                });
                $(".delivery .menu ol li").on("click",function(){
                    $(".delivery .menu ul li:first").text($(this).text());
                    $(".delivery i em").text($(this).text());
                    $(this).parents(".menu").toggleClass("hide");
                })

            })();
            //details
            (function(){
                //折叠事件
                $(".details .left dl dd ul li h3").on("click", function(){
                    $(this).toggleClass("toggle");
                    $(this).siblings().slideToggle()
                })
                //
                $(".details .right .right_menu li").on("click", function(){
                    $(this).addClass("active").siblings().removeClass("active");
                    $(".details .right dl dt ol li").eq($(this).index()).show().siblings().hide()
                })
                $(".details .right .right_menu li").eq(6).on("mouseenter", function(){
                    $(this).find("img").show();
                    $(this).find("i").rotate(0, 180)
                }).on("mouseleave", function(){
                    $(this).find("img").hide();
                    $(this).find("i").rotate(180, 0)
                })

            })()


        })
    })
})