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
    $sql="select * from cart as a INNER join list_1 as b on a.good_id=b.id where a.user_name='".$user_name."'";
    $res=$conn->query($sql);
        // 输出数据
        $rows=array();
        while($row = $res->fetch_assoc()) {
            $rows[]=$row;
        }
    print_r(json_encode($rows));
    $conn->close();
}else{
    // 添加购物车到数据库
    session_start();
    $user_name=session_id();
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
    mysqli_query($conn,"set names utf8");
    $sql="insert into cart (user_name,good_id,cart_color,cart_suit,cart_num) values ('".$user_name."',".$_REQUEST["id"].",'".$_REQUEST["color"]."','".$_REQUEST["suit"]."',".$_REQUEST["num"].")";
    $conn->query($sql);
    $conn->close();
    print_r(json_encode("成功"));
}