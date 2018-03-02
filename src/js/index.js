$(function(){

    //设置懒加载方法
    function lazy(){
        $("img.lazy").lazyload({
            placeholder : "img/grey.gif",
            effect: "fadeIn",
            threshold: 200
        });
    }
    //banner自动轮播
    (function(){
        var $newOl=$("<ol></ol>")
        $newOl.appendTo($(".banner"))
        $newOl.css({
            position:"absolute",
            bottom:"20px",
            left:"50%"
        })
        $.each($(".banner ul li"),function(index,ele){
            var $newLi=$("<li></li>");
            $newLi.appendTo($newOl);
            if(index==0){
                $newLi.addClass("active")
            }
            $newLi.css({
                width:"10px",
                height:"10px",
                backgroundColor:"#fff",
                borderRadius:"50%",
                marginLeft:"30px",
                float:"left"
            });

            $newLi.on("mouseenter click",function(){
                num=$(this).index()
                $(this).addClass("active").siblings().removeClass("active");
                $(".banner ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000)
            })
        });
        //自动轮播
        var num=0;
        var timer=null;
        function autoPlay(){
            timer=setInterval(function(){
                num++;
                $(".banner ol li").eq(num%$(".banner ol li").length).addClass("active").siblings().removeClass("active");
                $(".banner ul li").eq(num%$(".banner ul li").length).fadeIn(1000).siblings().fadeOut(1000)
            },2000);
        }
        autoPlay();
        $(".banner").on("mouseenter",function(){
            clearInterval(timer)
        }).on("mouseleave",function(){
            autoPlay();
        });
    })();

    // 团购轮播
    (function(){
        //动态生成li
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/group.php",
            dataType : "json"
        }).then(function(res){
            var arr=res;
            for(var i=0; i<arr.length; i++){
                //动态生成li
                $('<li class="clearfix goods"><div class="left"><p class="goodsName">'+arr[i]["name"]+'</p><p class="goodsDetails">'+arr[i]["msg"]+'</p><p class="goodsPrice"><i>￥</i><span>'+arr[i]["price"]+'</span></p><p class="goodsTime"> <span>剩余: </span><i>0</i>天<i>0</i>小时<i>0</i>分<i>0</i>秒</p></div><div class="right"><img src="'+arr[i]["img"]+'" alt=""></div><div class="slide"><div class="slide_left"><img src="'+arr[i]["img"]+'" alt=""><ol><li><a href="#">评测</a>|</li><li><a href="#">视频</a>|</li><li><a href="#">点评</a></li></ol></div><div class="slide_right"><p class="slide_name" >'+arr[i]["name"]+'</p><p class="slide_price" >团购价：<span>¥'+arr[i]["price"]+'</span></p><p class="slide_reference_price" >电商参考价：<span>¥'+arr[i]["price2"]+'</span></p><a href="#" class="slide_toPay">去团购</a></div></div></li>').appendTo($(".group_lunbo ul"))

            }
            for(var i=0; i<3; i++){
                $('<li class="clearfix goods"><div class="left"><p class="goodsName">'+arr[i]["name"]+'</p><p class="goodsDetails">'+arr[i]["msg"]+'</p><p class="goodsPrice"><i>￥</i><span>'+arr[i]["price"]+'</span></p><p class="goodsTime"> <span>剩余: </span><i>0</i>天<i>0</i>小时<i>0</i>分<i>0</i>秒</p></div><div class="right"><img src="'+arr[i]["img"]+'" alt=""></div><div class="slide"><div class="slide_left"><img src="'+arr[i]["img"]+'" alt=""><ol><li><a href="#">评测</a>|</li><li><a href="#">视频</a>|</li><li><a href="#">点评</a></li></ol></div><div class="slide_right"><p class="slide_name" >'+arr[i]["name"]+'</p><p class="slide_price" >团购价：<span>¥'+arr[i]["price"]+'</span></p><p class="slide_ reference_price" >电商参考价：<span>¥'+arr[i]["price2"]+'</span></p><a href="#" class="slide_toPay">去团购</a></div></div></li>').appendTo($(".group_lunbo ul"))
            }
            //动态设置ul宽度
            $(".group_lunbo ul").css("width",1200*Math.ceil($(".group_lunbo ul .goods").length/3)+"px");
            //动态设置每个li的背景颜色
            for(var i=0; i<$(".group_lunbo ul .goods").length; i++){
                switch(i%3){
                    case  0:
                        $(".group_lunbo ul .goods").eq(i).css("backgroundColor","#fff6dd");
                        break;
                    case 1:
                        $(".group_lunbo ul .goods").eq(i).css("backgroundColor","#ffe5e5");
                        break;
                    case 2:
                        $(".group_lunbo ul .goods").eq(i).css("backgroundColor","#e3f9ff");
                        break;
                }
            }
            // 团购轮播 滑入滑出事件
            $(".group_lunbo ul .goods").on("mouseenter",function(){
                $(this).find(".slide").stop().slideDown(200)

            }).on("mouseleave",function(){
                $(this).find(".slide").stop().slideUp(200)
            });
            //动态生成轮播小图标
            var $newOl=$("<ol></ol>");
            $newOl.appendTo($(".group"));
            $newOl.css({
                width:40*Math.ceil($(".group_lunbo ul .goods").length/3)+"px",
                margin:"15px auto",

            });
            ////动态生成轮播小图标个数
            for(var i=0; i<Math.ceil($(".group_lunbo ul .goods").length/3)-1; i++){
                var $newLi2=$("<li></li>");
                $newLi2.css({
                    width:"30px",
                    height:"10px",
                    float:"left",
                    marginLeft:"10px",
                    backgroundColor:"#ccc"
                });
                //给动态生成的小图标绑定点击事件
                $newLi2.on("click",function(){
                    index=$(this).index()-1;
                    console.log(index);
                    autoPlay1()
                })
                $newOl.append($newLi2)
            }
            // 自动轮播函数
            var index=0;
            function autoPlay1(){
                index++;
                if(index==Math.ceil($(".group_lunbo ul .goods").length/3-1)){
                    $(".group_lunbo ul").animate({
                        left:-1200*index+"px"
                    },1000,function(){
                        $(".group_lunbo ul").css("left","0px");
                    })
                    index=0;
                }else {
                    $(".group_lunbo ul").animate({
                        left:-1200*index+"px"
                    },1000,function(){
                    })
                }
                $newOl.find("li").eq(index).css("background","#c00").siblings().css("background","#ccc");
            }

            //页面加载开始自动轮播
            $(".group")[0].timer=setInterval(function(){
                autoPlay1()
            },2000);
            $(".group").on("mouseenter",function(){
                clearInterval(this.timer)

            }).on("mouseleave",function(){
                this.timer=setInterval(function(){
                    autoPlay1()
                },2000)
            });
        })

    })();

    // choice
    (function(){
        //动态生成 choice-top-left-top
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/choice.php",
            type:"post",
            dataType:"json",
            data:{
                class:"left_top"
            }
        }).then(function(res){
            var arr =res;
            // 动态生成元素
            for(var i=0; i<arr.length; i++){
                $("<li>"+arr[i]["name"]+"</li>").appendTo($(".choice .top .left .left_top ul"));
                $("<li><a href='#'> <img class=\"lazy\" data-original="+arr[i]["img"]+"></a></li>").appendTo($(".choice .top .left .left_top ol"));
            }
            lazy();
            $(".choice .top .left .left_top ul li").on("mouseenter",function(){
                $(".choice .top .left .left_top ol li").eq($(this).index()).css("zIndex",999).siblings().css("zIndex",0);
            })
        });
        //动态生成 choice-top-left-bot
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/choice.php",
            type:"post",
            dataType:"json",
            data:{
                class:"left_bot"
            }
        }).then(function(res){
            for(var i=0; i<res.length; i++){
                $('<li><img class="lazy" data-original="'+res[i]["img"]+'" alt=""><div><h3>'+res[i]["name"]+'</h3><h4><p>¥'+res[i]["price"]+'</p><a href="#" class="char">查看详情</a><p><a href="#">评测</a><a href="#">视频</a><a href="#">点评</a></p><p>电商参考价：¥'+res[i]["price2"]+'</p></h4></div></li>').appendTo($(".choice .top .left .left_bot ul"))
            }
            lazy();
            /*
            * <li><img src="images/img/ChMkJ1pXJ5CIYAtoAABTaH_knisAAkBxACzaWIAAFOA666.png" alt=""><div><h3>必联智能无线路由器</h3><h4><p>¥69</p><a href="#" class="char">查看详情</a><p><a href="#">评测</a><a href="#">视频</a><a href="#">点评</a></p><p>电商参考价：¥暂无</p></h4></div></li>
            * */
            //滑入滑出事件
            $(".choice .top .left .left_bot ul li").on("mouseenter",function(){
                $(this).find("div").stop().animate({
                    bottom:"0",
                    paddingTop:"50px"
                },300)
            }).on("mouseleave",function(){
                $(this).find("div").stop().animate({
                    bottom:"-150px",
                    paddingTop:"0px"
                },300)
            })
        })
        //动态生成 choice-top-right
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/choice.php",
            type:"post",
            dataType:"json",
            data:{
                class:"top_right"
            }
        }).then(function(res){
            // 动态创建元素
            for(var i=0; i<res.length; i++){
               var  $newA =$('<a href="#"><img class="lazy" data-original="'+res[i]["img"]+'" alt=""></a>');
               switch(i){
                   case 0:
                       $newA.addClass("right_left");
                       break;
                   case 1:
                       $newA.addClass("right_right");
                       break;
                   case 2:
                       $newA.addClass("right_bot");
                       break;
                   default:
                       break;
               };
               $newA.appendTo($(".choice .top .right"));
            };
            lazy();
            // 鼠标移入事件
            $(".choice .top .right a").on("mouseenter",function(){
                $(this).find("img").stop().scale(1,1.1);
            }).on("mouseleave",function(){
                $(this).find("img").stop().scale(1.1,1);
            });
        });


    })();
    //brand
    (function(){
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/brand.php",
            dataType : "json"
        }).then(function(res){
            for(var i=0; i<res.length; i++){
                $('<li><div><img class="lazy" data-original="'+res[i]["img"]+'" alt=""></div><a href="#">'+res[i]["name"]+'</a><p>RMB '+res[i]["price"]+'</p></li>').appendTo($(".brand ul"))
            }
            lazy()
            $(".brand ul li").not($(".brand ul li:first")).on("mouseenter",function(){
                $(this).find("img").stop().scale(1,1.1)

            }).on("mouseleave",function(){
                $(this).find("img").stop().scale(1.1,1)
            })
        })
    })();
    //e_Sports_left
    (function(){
        var num=0;//记录当前定时器作用的区域
        //TAB栏切换
         $(".e_Sports .content .left h2 ul li").on("click",function(){
            clearInterval(timer);
            num=$(this).index();
            timer=setInterval(function(){
                autoPlay(num)
            }.bind(this),2000);
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parents("h2").next(".list").find(".list_cat").eq($(this).index()).css("zIndex",5).siblings().css("zIndex",0)
        });
         // 鼠标移入移出  清除和开启定时器
        $(".e_Sports .left .list_cat").on("mouseenter",function(){
            clearInterval(timer);
        }).on("mouseleave",function(){
            timer=setInterval(function(){
                autoPlay(num)
            },2000)
        });
        //轮播
                //动态获取数据
            $.ajax({
                url:"http://127.0.0.1/zol/server/php/e_Sports.php",
                type:"post",
                dataType:"json",
                data:{
                    class:"left"
                }
            }).then(function(res){
                //动态创建元素
                for(var i=0; i<res.length; i++){
                    if(res[i]["class2"]==0){
                        $('<li><a href="#"><img src="'+res[i]["img"]+'" alt=""></a></li>').appendTo($(".list_cat").eq(Number(res[i]["class1"])).find(".list_cat_top ul"));
                    }else {
                        $('<li><a href="#"><img src="'+res[i]["img"]+'" alt=""></a><a href="#">'+res[i]["name"]+'</a><p class="price">'+res[i]["price"]+'</p></li>').appendTo($(".list_cat").eq(Number(res[i]["class1"])).find(".list_cat_bot ul"));
                    }
                }

                //动态创建轮播小图标
                for(var k=0; k<$(".list_cat").length; k++){
                    for(var i=0; i<$(".list_cat").eq(k).find(".list_cat_top ul li").length; i++){
                        var $newLi=$("<li></li>");
                        $newLi.appendTo($(".list_cat").eq(k).find(".list_cat_top ol"));
                        if(i==0){
                            $newLi.addClass("active");
                        }
                        $newLi.on("click",function(){
                            index=$(this).index()-1;
                            autoPlay($(this).parents(".list_cat").index());
                        })
                    }
                    $(".list_cat").eq(k).find(".list_cat_top ol").css({
                        width:$(".list_cat").eq(k).find(".list_cat_top ul li").length*20+"px",
                        marginLeft:$(".list_cat").eq(k).find(".list_cat_top ul li").length*20/2*-1+"px"
                    });
                    $(".list_cat").eq(k).find(".list_cat_top ul li").eq(0).clone().appendTo($(".list_cat").eq(k).find(".list_cat_top ul"));
                    $(".list_cat").eq(k).find(".list_cat_top ul").css({
                        width:$(".list_cat").eq(k).find(".list_cat_top ul li").length*594+"px"
                    });
                }
            });


        //自动轮播函数
        var index=0;
        function autoPlay(ind){
            index++;
            if(index>=$(".list_cat").eq(ind).find(".list_cat_top ul li").length-1){
                $(".list_cat").eq(ind).find(".list_cat_top ul").animate({
                    left:-594*index
                },function(){
                    $(".list_cat").eq(ind).find(".list_cat_top ul").css("left",0)
                });
                index=0
            }else {
                $(".list_cat").eq(ind).find(".list_cat_top ul").animate({
                    left:-594*index
                })
            }
            $(".list_cat").eq(ind).find(".list_cat_top ol li").eq(index).addClass("active").siblings().removeClass("active");
        }

        //开启轮播
        var timer=setInterval(function(){
            autoPlay(0);
        },2000)


    })();
    //e_Sports_right
    (function(){
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/e_Sports.php",
            type:"post",
            dataType:"json",
            data:{
                class:"right"
            }
        }).then(function(res){
            for(var i=0; i<res.length; i++){
                $("<li><a href='' ><img src='"+res[i]["img"]+"'></a><a href='#'>"+res[i]["name"]+"</a><p>"+res[i]["price"]+"</p> </li>").appendTo($(".e_Sports .right .content ul"))
            }
        })
    })();

    if($(window).scrollTop()>=500){
        $(".search1 .logo img").attr("src","images/img/logo_fixed1.png");
    }
    $(window).on("scroll",function(){
        if($(window).scrollTop()>=500){
            $(".search1 .logo img").attr("src","images/img/logo_fixed1.png");
            $(".search1").css({
                position:"fixed",
                top:0,
                left:"50%",
                marginLeft:-1*$(".search1").width()/2
            });
            $("nav").css({
                paddingTop:"90px"
            })
        }else {
            $(".search1 .logo img").attr("src","http://127.0.0.1/zol/src/images/img/2018logo_130x60.gif");
            $(".search1").css({
                position:"static",
                marginLeft:0
            })
            $("nav").css({
                paddingTop:"30px"
            })
        }
    })
});