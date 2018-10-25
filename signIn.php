<?php
  session_start();
  require_once "connect.php";
  $connect = new mysqli($host, $db_user, $db_password, $db_name);
  
  if($connect->connect_errno!=0)
  {
	  echo "Error: ".$connect->connect_errno."Opis :".$connect->connect_error;
  }
  else
  {
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
 
  if($result = @$connect->query($sql))
  {
	  $how_many_users = $result->num_rows;
	  if($how_many_users>0)
	  {
		  $line = $result->fetch_assoc();
		  $_SESSION['email'] = $line['email'];
		  
		  $result->free_result();
		  $_SESSION['correct_login']=1;
          $_SESSION['bad_login']=0;
		  header('Location: PPiW_shop.php');
	  }
	  else
  {
	  	  $_SESSION['correct_login']=0;
		  $_SESSION['bad_login']=1;

	  header('Location: PPiW_shop.php');
  }
	  
	  
  }
 
 $connect->close();
  }
  
  ?>