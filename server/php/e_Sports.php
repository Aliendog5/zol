<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/28
 * Time: 9:43
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

$conn=new mysqli("127.0.0.1","root","","zol_shopping");
mysqli_query($conn,"set names utf8");
$sql="select * from e_sports_".$_REQUEST["class"];
$res=$conn->query($sql);
// 输出数据
$rows=array();
while($row = $res->fetch_assoc()) {
    $rows[]=$row;
};
print_r(json_encode($rows));

$conn->close();