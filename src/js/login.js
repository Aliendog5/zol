$(function(){
    $("#myform").on("submit",function(){
        var data=$.toData($("#myform").serialize());
        data["userPwd"]=$.md5(data["userPwd"]);
        $.ajax({
            url:"http://127.0.0.1/zol/server/php/login.php",
            type:"post",
            dataType:"json",
            data:data
        }).then(function(res){
            if(res["status"]){
                var arr=JSON.parse($.cookie("list"))
                for(var i=0; i<arr.length; i++){
                    $.ajax({
                        url:"http://127.0.0.1/zol/server/php/cart.php",
                        type:"post",
                        dataType:"json",
                        data:{
                            id:arr[i]
                        }
                    })
                };
                $.removeCookie("list");
                alert("登录成功");
                window.location.href="index.html";
            }
        });
        return false
    })
})