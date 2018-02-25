<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/9
 * Time: 13:43
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $userName=$_REQUEST["userName"];
    $userPwd=$_REQUEST["userPwd"];

    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="select * from userinfo where user_name='".$userName."' and user_pwd='".$userPwd."'";
    $res=$conn->query($sql);
    $arr=array();
    if ($res->num_rows==1){
        $arr["status"]=1;
        $arr["msg"]="登录成功";
        session_id($userName);
        session_start();
    }else{
        $arr["status"]=0;
        $arr["msg"]="登录失败";
    }
    print_r(json_encode($arr));
}
