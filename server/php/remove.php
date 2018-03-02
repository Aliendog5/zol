<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/26
 * Time: 9:39
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if ($_REQUEST["num"]==null){
    //移出购物车
    session_start();
    $user_name=session_id();
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="delete from cart where user_name='".$user_name."' and cart_id='".$_REQUEST["id"]."'";
    $res=$conn->query($sql);
    $conn->close();
}else{
    //修改数量
    session_start();
    $user_name=session_id();
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="update cart set cart_num='".$_REQUEST["num"]."' where user_name='".$user_name."' and cart_id='".$_REQUEST["id"]."'";
    $res=$conn->query($sql);
    $conn->close();
}