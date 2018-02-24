<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/23
 * Time: 14:52
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域


   $user_name= $_REQUEST["userName"];
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