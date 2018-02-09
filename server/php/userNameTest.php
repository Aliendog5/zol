<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/2/9
 * Time: 12:36
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域

$userName=$_REQUEST["userName"];

$conn=new mysqli("127.0.0.1","root","","zol_shopping");

mysqli_query($conn,"set names utf8");

$sql="select * from userinfo where user_name='".$userName."'";

$res=$conn->query($sql);
if ($res->num_rows>=1){
    print_r("false");
}else{
    print_r("true");
}

/*if ($res->num_rows>0) {
    // 输出数据
    while($row = $res->fetch_assoc()) {
        echo "id: " . $row["user_id"]. " - Name: " . $row["user_name"]. " - pwd: " . $row["user_pwd"]. "- sex: ".$row["user_sex"]."-address".$row["user_address"]."-tel".$row["user_tel"];
    }
} else {
    echo "0 结果";
}*/
$conn->close();
