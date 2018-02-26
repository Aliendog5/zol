<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/23
 * Time: 14:52
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域
//判断是否带有请求参数  没有参数表示获取购物车数据  有参数代表添加购物车数据
if (empty($_REQUEST)){
    //获取购物车数据
    session_start();
    $user_name=session_id();
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="select * from cart where user_name='".$user_name."'";
    $res=$conn->query($sql);
    if ($res->num_rows>0) {
        // 输出数据
        while($row = $res->fetch_assoc()) {
            print_r(json_encode($row["list"])) ;
        }
    } else {
        echo "0 结果";
    }
    $conn->close();
}else{
    // 添加购物车到数据库
    session_start();
    $user_name=session_id();
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="select * from cart where user_name='".$user_name."'";
    $res=$conn->query($sql);
    if ($res->num_rows>0) {
        // 输出数据
        $row = $res->fetch_assoc();
        $arr=json_decode($row["list"]);
        $arr[]=$_REQUEST["id"];
        $conn1=new mysqli("127.0.0.1","root","","zol_shopping");
        mysqli_query($conn1,"set names utf8");
        $sql="update cart set list='".json_encode($arr)."' where user_name='".$user_name."'";
        print_r(json_encode($arr));
        $res=$conn1->query($sql);
    } else {
        echo "0 结果";
    }
    $conn->close();
}