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
                alert("登录成功");
                window.location.href="index.html";
            }
        });
        return false
    })
})