<?php

	session_start();
	
	require_once "connect.php";

	$connect = @new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($connect->connect_errno!=0)
	{
		echo "Error: ".$connect->connect_errno;
	}
	else
	{
		$nick = $_POST['nick'];
		$password = $_POST['password'];
		
		$nick = htmlentities($nick, ENT_QUOTES, "UTF-8");
	
		if ($result = @$connect->query(
		sprintf("SELECT * FROM users WHERE users='%s'",
		mysqli_real_escape_string($connect, $nick))))
		{
			$how_many_users = $result->num_rows;
			if($how_many_users>0)
			{
				$line = $result->fetch_assoc();
				
				if (password_verify($password, $line['password']))
				{
					$_SESSION['correct_login'] = 1;
					$_SESSION['id'] = $line['id'];
					$_SESSION['email'] = $line['email'];
					
					$result->free_result();
	    header('Location: PPiW_shop.php');
				}
		    }
		$polaczenie->close();
	    }
	}
?>