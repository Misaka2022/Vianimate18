<?php
    $mysql_server="localhost:3309";
    $mysql_username="root";
    $mysql_password="123456";
    $mysql_database="work1";
    $conn = mysqli_connect($mysql_server,$mysql_username,$mysql_password) or die("数据库链接错误");
    mysqli_select_db($conn,$mysql_database);
    //获取用户数据
    function getUsers(){
        global $conn;
        $sql="SELECT * FROM user";
        $query=mysqli_query($conn,$sql);
        $fect=mysqli_fetch_all($query);
        return $fect;
    }
    //保存用户数据
    function saveUser($name,$psw,$userphoto){
        global $conn;
        $sql="INSERT INTO user(workname,psw,userphoto) VALUES($name,$psw,$userphoto)";
        mysqli_query($conn,$sql);
    }
?>