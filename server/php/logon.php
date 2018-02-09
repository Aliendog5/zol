<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/8
 * Time: 20:31
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if (!empty($_POST["userName"])&&!empty($_POST["userPwd"])&&!empty($_POST["userTel"])&&!empty($_POST["userSex"])&&!empty($_POST["userAddress"])){
        $userName=$_POST["userName"];
        $userPwd=$_POST["userPwd"];
        $userTel=$_POST["userTel"];
        $userSex=$_POST["userSex"];
        $userAddress=$_POST["userAddress"];

//创建spl对象
        $conn=new mysqli("127.0.0.1","root","","zol_shopping");
        // 设置参数
        mysqli_query($conn,"set names utf8");

        // 准备spl语句
        $str="INSERT INTO userinfo(user_name,user_pwd,user_tel,user_sex,user_address) VALUES('".$userName."','".$userPwd."','".$userTel."','".$userSex."','".$userAddress."')";
        //执行spl语句
        $res=$conn->query($str);
        $conn->close();
        $resArr=array();
        if ($res){
            $resArr["status"]=1;
            $resArr["msg"]="注册成功";

        }else{
            $resArr["status"]=0;
            $resArr["msg"]="注册失败";
        }
        print_r(json_encode($resArr));

    }else{
        $resArr=array();
        $resArr["status"]=0;
        $resArr["msg"]="注册失败";
        print_r(json_encode($resArr));
    }
}