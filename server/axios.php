<?php
header("Content-type: text/html; charset=utf-8");
$conn = mysqli_connect('localhost:3309','root','123456');//连接数据库，根据自己的数据库填写
$select = mysqli_select_db($conn,'work1');//选着数据库表
$sql="select * from user";//操作数据库
$result=mysqli_query($conn,$sql); //执行操作
$row=mysqli_fetch_row($result); // 从结果集中取得一行作为枚举数组，存入row数组中
echo(json_encode($row)); //返回相应数组，不是用return
echo mysqli_error($conn);
?>
