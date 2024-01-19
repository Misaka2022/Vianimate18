<?php 
  header('Content-Type: application/json');
  require './conn.php';

  $user=$_POST['username'];
  $psw=$_POST['psw'];
  $rpsw=$_POST['rpsw'];
  $uspt=$_POST['uspt'];
  if($user || $psw || $uspt){
    echo "Success";
  }
?>