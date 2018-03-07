require(["config"],function(){
	require(["jquery","jquery-cookie","transform"],function($){
		$(function(){
			require(["header","search","nav1","footer_index","copy","aside"]);
            //跳转参数
            var arr=decodeURIComponent(window.location.search).replace("?",'').split("&");
            for(var i=0; i<arr.length; i++){
                switch(arr[i].split("=")[0]){
                    case "class1":
                        for(var j=0; j<$("select option").length; j++){
                            if($("select option").eq(j).val()==arr[i].split("=")[1]){
                                $("select option").eq(j).attr("selected","selected").siblings().removeAttr("selected")
                            }
                        };
                        break;
                    case "class2":
                        for(var j=0; j<$(".all ul li input").length; j++){
                            if($(".all ul li input").eq(j).val()==arr[i].split("=")[1]){
                                $(".all ul li input").eq(j).attr("checked","checked")
                            }
                        };
                        break;
                }
            }
            //
			$(".all ul li").eq($("select option:selected").index()).show().siblings("li").hide();
			// class1 搜索
			$(".all select").on("change",function(){
				$(".all ul li").eq($(".all select option:selected").index()).show().siblings("li").hide().find("input").attr("checked",false);
				$(".all ol li input").attr("checked",false);
				var str="class1='"+$(this).val()+"'";
				$.ajax({
					url:"../server/php/list.php",
					type:"post",
					dataType:"json",
					data:{
						id:str
					}
				}).then(function(res){
					$(".list_menu ol").html("");
					for(var i=0; i<res.length; i++){
						$("<li data-info='"+res[i]["id"]+"'><img src='images/img/"+res[i]["img_list"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
						/*<li data-info="1">
								<img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
								<h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
							<p class="price">¥2699.00</p>
		
							</li>*/
					}
					$(".list_menu ol li").on("click",function(){
						window.location.href="info.html?id="+$(this).data("info")
					})
				})
			});
			// class2 搜索
			$(".all ul li input").on("click",function(){
				// 判断二级搜索是否有条件
				if($(this).parent().find("input:checked").length!=0){
					var str="class1='"+$(".all select").val()+"' and (";
					for(var i=0; i<$(this).parent().find("input:checked").length; i++){
						str+="class2='"+$(this).parent().find("input:checked")[i].value+"' or "
					}
					str=str.replace(/or\s$/,')');
					// 判断价格选项是否选中
					if($(".all ol li input:checked").length!=0){
						var arr = JSON.parse($(".all ol li input:checked").val());
						str+=" and (price>"+arr[0]+" and price<"+arr[1]+")"
					}
				}else {
					var str="class1='"+$(".all select option").eq($(this).parent().index()).val()+"'";
					if($(".all ol li input:checked").length!=0){
						var arr = JSON.parse($(".all ol li input:checked").val());
						str+=" and (price>"+arr[0]+" and price<"+arr[1]+")"
					}
				}
				$.ajax({
					url:"../server/php/list.php",
					type:"post",
					dataType:"json",
					data:{
						id:str
					}
				}).then(function(res){
					$(".list_menu ol").html("");
					for(var i=0; i<res.length; i++){
						$("<li data-info='"+res[i]["id"]+"'><img src='images/img/"+res[i]["img_list"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
						/*<li data-info="1">
								<img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
								<h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
							<p class="price">¥2699.00</p>
		
							</li>*/
					}
					$(".list_menu ol li").on("click",function(){
						window.location.href="info.html?id="+$(this).data("info")
					})
				})
			});


            var str=decodeURIComponent(window.location.search).replace("?","").replace("&","' and ").replace(/=/g,"='")+"'";
            $.ajax({
				url:"../server/php/list.php",
				type:"post",
				dataType:"json",
				data:{
					id:str
				}
			}).then(function(res){
				for(var i=0; i<res.length; i++){
					$("<li data-info='"+res[i]["id"]+"'><img src='images/img/"+res[i]["img_list"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
					/*<li data-info="1">
							<img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
							<h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
						<p class="price">¥2699.00</p>
			
						</li>*/
				}
				$(".list_menu ol li").on("click",function(){
					window.location.href="info.html?id="+$(this).data("info")
				})
			});
			//价格搜索
			$(".all ol li input").on("click",function(){
				var arr= JSON.parse($(".all ol li input:checked").val());
				var str="class1='"+$(".all select").val()+"' and (price>"+arr[0]+" and price<"+arr[1]+")";
				
				if($(".all ul li").eq($(".all select option:checked").index()).find("input:checked").length!=0){
					str+=" and (";
					for(var i=0; i<$(".all ul li").eq($(".all select option:checked").index()).find("input:checked").length; i++){
						str+="class2='"+$(".all ul li").eq($(".all select option:checked").index()).find("input:checked")[i].value+"' or "
					}
					str=str.replace(/or\s$/,')');
					
					
				}
				$.ajax({
					url:"../server/php/list.php",
					type:"post",
					dataType:"json",
					data:{
						id:str
					}
				}).then(function(res){
					$(".list_menu ol").html("");
					for(var i=0; i<res.length; i++){
						$("<li data-info='"+res[i]["id"]+"'><img src='images/img/"+res[i]["img_list"]+"'><h4>"+res[i]["name"]+"</h4><p class='price'>¥"+res[i]["price"]+"</p></li>").appendTo($(".list_menu ol"))
						/*<li data-info="1">
								<img src="images/img/ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg" alt="">
								<h4>【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G</h4>
							<p class="price">¥2699.00</p>
		
							</li>*/
					}
					$(".list_menu ol li").on("click",function(){
						window.location.href="info.html?id="+$(this).data("info")
					})
				})
			});


        });
	})
})


