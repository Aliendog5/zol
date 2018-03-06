$(function(){
    //判断登录状态
    $.ajax({
        url:"../server/php/loginStatus.php"
    }).then(function(res){
		if(res=="true"){
			//从数据库请求购物车数据
			$.ajax({
				url:"http://127.0.0.1/zol/server/php/cart.php",
				type:"post",
				dataType:"json"
			}).then(function(res){
				// 遍历数据库数据获取商品详情
				var num=0;
				$(".price p em").text(res.length);
				var cartList=res;
			
				for(var i=cartList.length-1; i>=0; i--){
					var $newTr=$('<tr data-info="'+cartList[i]["cart_id"]+'" data-id="'+cartList[i]["id"]+'"><td class="good"><img src="images/img/'+cartList[i]["img_list"]+'" alt=""><div><a href="#">'+cartList[i]["name"]+'</a><p>颜色：'+cartList[i]["cart_color"]+'</p><p>  套装：'+cartList[i]["cart_suit"]+'</p></div></td><td class="price">'+cartList[i]["price"]+'</td><td class="num"><a href="javascript:void(0)">-</a><span>'+cartList[i]["cart_num"]+'</span><a href="javascript:void(0)">+</a></td><td> --</td><td class="money">'+(cartList[i]["cart_num"]*cartList[i]["price"])+'</td><td class="caozuo"><a href="javascript:void(0)" class="remove">删除</a></td></tr>');
					$newTr.appendTo($("#tab"));
					num+=parseInt(cartList[i]["cart_num"])*parseInt(cartList[i]["price"]);
				};
				// 绑定删除点击事件
				//删除购物车中的商品
				$(".remove").on("click",function(){
					var data=$(this).parents("tr").data("info");
					$(this).parents("tr").remove();
					// 删除数据库对应的数据
					$.ajax({
						url:"http://127.0.0.1/zol/server/php/remove.php",
						type:"post",
						dataType:"json",
						data:{
							id:data
						}
					})
					alert("操作成功");
					$(".price p em").text(Number($(".cart span").text())-1);
					$(".cart span").text(Number($(".cart span").text())-1);
				});
				//跳转到详情页
				$(".good").on("click",function(){
					window.location.href="http://127.0.0.1/zol/src/info.html?id="+$(this).parents("tr").data("id");
				});
				//修改商品数量
				$("#tab .num").find("a:first").on("click",function(){
					$(this).siblings("span").text($(this).siblings("span").text()<=1?1:$(this).siblings("span").text()-1);
					var data=$(this).parents("tr").data("info");
					$.ajax({
						url:"http://127.0.0.1/zol/server/php/remove.php",
						type:"post",
						dataType:"json",
						data:{
							id:data,
							num:$(this).siblings("span").text()
						}
					})
				});
				$("#tab .num").find("a:last").on("click",function(){
					$(this).siblings("span").text(Number($(this).siblings("span").text())+1);
					var data=$(this).parents("tr").data("info");
					$.ajax({
						url:"http://127.0.0.1/zol/server/php/remove.php",
						type:"post",
						dataType:"json",
						data:{
							id:data,
							num:$(this).siblings("span").text()
						}
					})
				})
				$(".price p span i").text(num);
				$(".list .total span").text("￥"+num);
			})
		}else {
			var cartList=JSON.parse($.cookie("list")||"[]");
			var num=0;
			$(".price p em").text(cartList.length);
		
			for(var i=cartList.length-1; i>=0; i--){
				var $newTr=$('<tr data-info="" data-id="'+cartList[i]["id"]+'"><td class="good"><img src="" alt=""><div><a href="#"></a><p>颜色：'+cartList[i]["color"]+'</p><p>  套装：'+cartList[i]["suit"]+'</p></div></td><td class="price"></td><td class="num"><a href="javascript:void(0)">-</a><span>'+cartList[i]["num"]+'</span><a href="javascript:void(0)">+</a></td><td> --</td><td class="money"></td><td class="caozuo"><a href="javascript:void(0)" class="remove">删除</a></td></tr>');
				$newTr.appendTo($("#tab"));
				$.ajax({
					url:"http://127.0.0.1/zol/server/php/list.php",
					type:"post",
					dataType:"json",
					data:{
						id:cartList[i]["id"]
					}
				}).then(function(res){
					$("#tab tr[data-id="+res[0]["id"]+"] .good img").attr("src","images/img/"+res[0]["img_list"]);
					$("#tab tr[data-id="+res[0]["id"]+"] .good a").text(res[0]["name"]);
					$("#tab tr[data-id="+res[0]["id"]+"] .price").text(res[0]["price"]);
					num+=Number(res[0]["price"])*Number($("#tab tr[data-id="+res[0]["id"]+"] .num span").text());
				
					$("#tab tr[data-id="+res[0]["id"]+"] .money").text(Number(res[0]["price"])*Number($("#tab tr[data-id="+res[0]["id"]+"] .num span").text()));
					$(".price p span i").text(num);
					$(".list .total span").text("￥"+num);
				})
			};
			// 绑定删除点击事件
			//删除购物车中的商品
			$(".remove").on("click",function(){
				var data=$(this).parents("tr").data("id");
				$(this).parents("tr").remove();
				// 删除数据库对应的数据
				var arr=JSON.parse($.cookie("list"));
				for(var i=0; i<arr.length; i++){
					if(arr[i]["id"]==data){
						arr.splice(i,1)
					}
				}
				alert("操作成功");
				$(".cart span").text(arr.length);
				$(".price p em").text(arr.length);
				$.cookie("list",JSON.stringify(arr))
			
			});
			//跳转到详情页
			$(".good").on("click",function(){
				window.location.href="http://127.0.0.1/zol/src/info.html?id="+$(this).parents("tr").data("id");
			});
			//修改商品数量
			$("#tab .num").find("a").eq(0).on("click",function(){
				$(this).siblings("span").text($(this).siblings("span").text()<=1?1:$(this).siblings("span").text()-1);
				var arr=JSON.parse($.cookie("list"));
				for(var i=0; i<arr.length; i++){
					if(arr[i]["id"]==$(this).parents("tr").data("id")){
						arr[i]["num"]=$(this).siblings("span").text();
					}
				}
				$.cookie("list",JSON.stringify(arr))
			});
			$("#tab .num").find("a").eq(1).on("click",function(){
				$(this).siblings("span").text(Number($(this).siblings("span").text())+1);
				var arr=JSON.parse($.cookie("list"));
				for(var i=0; i<arr.length; i++){
					if(arr[i]["id"]==$(this).parents("tr").data("id")){
						arr[i]["num"]=$(this).siblings("span").text()
					}
				}
				$.cookie("list",JSON.stringify(arr))
			})
		}
    })
    

})