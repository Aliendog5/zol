
require(["config"],function(){
	require(["jquery","jquery-cookie","md5","tools","idcode"],function($){
		$(function(){
			require(["footer"]);
			var flag=false;
			$.idcode.setCode();
			$("#Txtidcode").on("blur",function(){
				var IsBy = $.idcode.validateCode();
				flag=IsBy;
				if(flag){
					$("#msg").removeClass("msgF").addClass("msgT");
					$("#msg").text("验证码正确")
				}else {
					$("#msg").removeClass("msgT").addClass("msgF");
					$("#msg").text("*验证码错误")
				}
			})
			$(".all").css("marginBottom","130px");
			$("#myform").on("submit",function(){
				
				if(flag){
					$(".msg").text("");
					var data=$.toData($("#myform").serialize());
					data["userPwd"]=$.md5(data["userPwd"]);
					$.ajax({
						url:"../server/php/login.php",
						type:"post",
						dataType:"json",
						data:data
					}).then(function(res){
						if(res["status"]){
							var arr=JSON.parse($.cookie("list")||"[]");
							for(var i=0; i<arr.length; i++){
								$.ajax({
									url:"../server/php/cart.php",
									type:"post",
									dataType:"json",
									data:arr[i]
								})
							};
							$.removeCookie("list");
							alert("登录成功");
							window.location.href="index.html";
						}
					});
				}else {
					$(".msg").text("*验证码错误")
				}
				return false
			})
			
		})
	})
})

