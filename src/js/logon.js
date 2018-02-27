(function(jQuery){
    $(function(){
        $("#myform").validate({
            rules:{
                userName:{
                    required : true,
                    rangelength:[6,16],
                    remote:"http://127.0.0.1/zol/server/php/userNameTest.php"
                },
                userPwd:{
                    rangelength:[8,18]
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
                    url:"http://127.0.0.1/zol/server/php/logon.php",
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
})(jQuery);