
<?php
$id=$_REQUEST["id"];
$conn=new mysqli("127.0.0.1","root","","zol_shopping");
mysqli_query($conn,"set names utf8");
$sql="select * from list where id='".$id."'";
$res=$conn->query($sql);
if ($res->num_rows>0) {
    // 输出数据
    while($row = $res->fetch_assoc()) {
//        class1,class2,NAME,info,img,num,color
        print_r(json_encode('{"id":"'.$row["id"].'","class1":"'.$row["class1"].'","class2":"'.$row["class2"].'","name":"'.$row["name"].'","info":"'.$row["info"].'","img":"'.$row["img"].'","num":"'.$row["num"].'","color":"'.$row["color"].'","price":"'.$row["price"].'"}')) ;

    }
} else {
    echo "0 结果";
}
$conn->close();

?>


