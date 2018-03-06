<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/6
 * Time: 16:43
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");//允许跨域
session_start();
if (!empty($_SESSION["userName"])){
    print_r("true");
}else{
    print_r("false");
}