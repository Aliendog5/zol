<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/27
 * Time: 15:17
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

if ($_REQUEST["class"]=="left_top"){
    //创建sql对象
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
//sql对象设置
    mysqli_query($conn,"set names utf8");
//生成sql语句字符串
    $sql="select * from choice_top_left_top";
// 执行sql语句  接收结果
    $res=$conn->query($sql);
// 输出数据
    $rows=array();
    while($row = $res->fetch_assoc()) {
        $rows[]=$row;
    };
    print_r(json_encode($rows));

    $conn->close();
}
if ($_REQUEST["class"]=="left_bot"){
    //创建sql对象
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
//sql对象设置
    mysqli_query($conn,"set names utf8");
//生成sql语句字符串
    $sql="select * from choice_top_left_bot";
// 执行sql语句  接收结果
    $res=$conn->query($sql);
// 输出数据
    $rows=array();
    while($row = $res->fetch_assoc()) {
        $rows[]=$row;
    };
    print_r(json_encode($rows));

    $conn->close();
}
if ($_REQUEST["class"]=="top_right"){
    //创建sql对象
    $conn=new mysqli("127.0.0.1","root","","zol_shopping");
//sql对象设置
    mysqli_query($conn,"set names utf8");
//生成sql语句字符串
    $sql="select * from choice_top_right";
// 执行sql语句  接收结果
    $res=$conn->query($sql);
// 输出数据
    $rows=array();
    while($row = $res->fetch_assoc()) {
        $rows[]=$row;
    };
    print_r(json_encode($rows));

    $conn->close();
}