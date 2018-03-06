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
					if(confirm("确定要退出登录码")){
						$.ajax({
							url : "http://127.0.0.1/zol/server/php/out.php"
						})
						window.location.reload();
					}
				});
				$.ajax({
					url : "http://127.0.0.1/zol/server/php/cart.php",
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
    
    })
});