
require(["config"],function(){
    require(["jquery","validate","tools","md5"],function($){
		$(function(){
		    require(["footer"]);
            jQuery.validator.addMethod("isZipCode", function(value, element) {
                var tel = /^[a-zA-Z]/;
                return this.optional(element) || (tel.test(value));
            }, "用户名必须是字母开头");
            jQuery.validator.addMethod("isPwd", function(value, element) {
                var tel = /[a-zA-Z]/;
                var tel1=/\d/;
                return this.optional(element) || (tel.test(value)&&tel1.test(value));
            }, "密必须包含数字、字母、下划线中的两种");
			$("#myform").validate({
				rules:{
					userName:{
                        isZipCode:true,
						required : true,
						rangelength:[6,16],
						remote:"../server/php/userNameTest.php"
					},
					userPwd:{
						rangelength:[8,18],
                        isPwd:true
					},
					userPwd2:{
						equalTo:"#field"
					},
					userTel:{
						"required" : true,
						rangelength:[11,11]
					},
					userSex:{
						"required" : true
					},
					userAddress:{
						"required" : true,
					}
				},
				messages :{
					userName:{
						required : "用户名不能为空",
						rangelength:"用户名长度在${0}-${1}之间",
						remote:"用户名已存在"
					},
					userPwd:{
						rangelength:"密码长度在${0}-${1}之间",
					},
					userPwd2:{
						equalTo:"密码与第一次输入不同"
					},
					userTel:{
						"required" : "请输入电话号码",
						rangelength:"请输入正确的电话号码"
					},
					userSex:{
						"required" : "必选项"
					},
					userAddress:{
						"required" : "请填写您的地址"
					}
				},
				submitHandler:function(){
					var data=$.toData($("#myform").serialize());
					data["userPwd"]=$.md5(data["userPwd"]);
					$.ajax({
						url:"../server/php/logon.php",
						type:"post",
						dataType:"json",
						data:data
					}).then(function(res){
						
						if(res["status"]){
							if(confirm("注册成功！是否跳转到登录页面")){
								window.location.href="login.html"
							}
						}else{
							alert("注册失败")
						}
					});
					return false
				}
			
			})
		})
    })
})
