<?php
	session_start();
 require_once "connect.php";
 mysqli_report(MYSQLI_REPORT_STRICT); 
if (isset($_POST['item_id']) && isset($_SESSION['id'])) 
{ 
    $item_id = (int)$_POST['item_id'];
    $user_id = (int)$_SESSION['id'];
		try
		{
			 $connect = new mysqli($host, $db_user, $db_password, $db_name);
  
              if($connect->connect_errno!=0)
              {
                  throw new Exception(mysqli_connect_errno());              
		      }
			  else
			  {
		           if($connect->query("INSERT INTO cart VALUES('$user_id', '$item_id')"))
					  {
                           $_SESSION['correctSignUp'] = 1;
					  }
			  }
			  $connect->close();
		}
		catch(Exception $e)
		{
			echo json_encode($e->getMessage());
		}
    

}
