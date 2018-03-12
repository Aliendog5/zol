$(function(){
    $("header").load("header.php", function(){
        $(".my_li").on("mouseenter", function(){
            $(this).find("i").rotate(0, 180)
        }).on("mouseleave", function(){
            $(this).find("i").rotate(180, 0)
        });
		$.ajax({
			url:"../server/php/loginStatus.php"
		}).then(function(res){
			if(res=="true"){
				$(".user .loginOut").on("click", function(){
				    $(".confirm").show();
                    $('body').css({
                        "overflow-x":"hidden",
                        "overflow-y":"hidden"
                    });
                });
				$.ajax({
					url : "../server/php/cart.php",
					type : "post",
					dataType : "json"
				}).then(function(res){
					$(".search1 ol li").eq(2).find("span").text(res.length);
					$(".cart span").text(res.length);
					$(".slide_aside ul li").eq(2).find("a span").text(res.length);
				})
				
			}else {
				$(".search1 ol li").eq(2).find("span").text(JSON.parse($.cookie("list")||"[]").length);
				$(".cart span").text(JSON.parse($.cookie("list")||"[]").length);
				$(".slide_aside ul li").eq(2).find("a span").text(JSON.parse($.cookie("list")||"[]").length);
			}
		})
        $(".confirm .yes").on("click",function(){
            $.ajax({
                url : "../server/php/out.php"
            });
            window.location.reload();
            $('body').css({
                "overflow-x":"auto",
                "overflow-y":"auto"
            });
        });
        $(".confirm .no").on("click",function(){
            $(".confirm").hide();
            $('body').css({
                "overflow-x":"auto",
                "overflow-y":"auto"
            });
        })
        $(".confirm .center").dragbox();
    
    })
});