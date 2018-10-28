<?php
session_start();

    if(isset($_SESSION['bad_login']))  
	    unset($_SESSION['bad_login']);
	  if(isset($_SESSION['tooShortOrLongNick']))  
	unset($_SESSION['tooShortOrLongNick']);
	if(isset($_SESSION['OnlyLetterOrNubmerToNick']))  
	unset($_SESSION['OnlyLetterOrNubmerToNick']);
	if(isset($_SESSION['invalidEmail']))  
    unset($_SESSION['invalidEmail']);
	if(isset($_SESSION['tooShortOrLongPassword']))  
	unset($_SESSION['tooShortOrLongPassword']);
	if(isset($_SESSION['passwordIsNotEqualTo']))  
	unset($_SESSION['passwordIsNotEqualTo']);
    if(isset($_SESSION['checkboxIsNotChecked']))  
	unset($_SESSION['checkboxIsNotChecked']);
	if(isset($_SESSION['recaptchaIsNotChecked']))  
	unset($_SESSION['recaptchaIsNotChecked']);
	if(isset($_SESSION['emailIsAlreadyExist']))  
	unset($_SESSION['emailIsAlreadyExist']);
	if(isset($_SESSION['nickIsAlreadyExist']))  
	unset($_SESSION['nickIsAlreadyExist']);

  
	$nick = $_POST['nick'];
	if((strlen($nick)<3)||(strlen($nick)>20))
	{
      $everything_OK = false;
	  $_SESSION['tooShortOrLongNick'] = 1;
	}
	if(ctype_alnum($_nick)==true)
	{
        $everything_OK = false;
		$_SESSION['OnlyLetterOrNubmerToNick'] = 1;
	}
	
	
	$email = $_POST['email'];
	$emailSafe = filter_var($email, FILTER_SANITIZE_EMAIL);
	if((filter_var($emailSafe, FILTER_VALIDATE_EMAIL)==false)||($emailSafe!=$email))
	{
		$everything_OK = false;
		$_SESSION['invalidEmail'] = 1;
	}
	
	
	$password = $_POST['password'];
	$passwordRepeat = $_POST['passwordRepeat'];
	if((strlen($password)<8)||(strlen($password)>20))
	{
		$everything_OK = false;
		$_SESSION['tooShortOrLongPassword'] = 1;
	}
	if($password != $passwordRepeat)
	{
        $everything_OK = false;
		$_SESSION['passwordIsNotEqualTo'] = 1;	
	}
	$passwordHash = password_hash($password, PASSWORD_DEFAULT);
	
	
	if(!isset($_POST['rules']))
	{
	    $everything_OK = false;
		$_SESSION['checkboxIsNotChecked'] = 1;		
	}
	
	
	$secretCode = "6Lc1CHcUAAAAABDraHI_DWAO2OmkAGW1RBR03KyO";
	$check = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretCode.'&response='.$_POST['g-recaptcha-response']);
	$answer = json_decode($check);
	if($answer->success===false)
	{
	    $everything_OK = false;
		$_SESSION['recaptchaIsNotChecked'] = 1;
	}
	
	
	

		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try
		{
			 $connect = new mysqli($host, $db_user, $db_password, $db_name);
  
              if($connect->connect_errno!=0)
              {
                  throw new Exception(mysqli_connect_errno());              
		      }
			  else
			  {
			  	  $result = $connect->query("SELECT id FROM users WHERE email='$email'");
				  if(!$result) throw new Exception($connect->error);
				  $how_many_email = $result->num_rows;
				  if($how_many_email>0)
				  {
					  $everything_OK = false;
		              $_SESSION['emailIsAlreadyExist'] = 1; 
				  }
				  $how_many_nick = $result->num_rows;
				  if($how_many_nick>0)
				  {
					  $everything_OK = false;
		              $_SESSION['nickIsAlreadyExist'] = 1; 
				  }
				  if(!isset($everything_OK))
				  {
		              if($connect->query("INSERT INTO users VALUES(NULL, '$email','$nick','$passwordHash','0')"))
					  {
                           $_SESSION['correctSignUp'] = 1;
						
					   	   header('Location: PPiW_shop.php');
					  }				  
				  }
				  $connect->close();
			  }
		}
		catch(Exception $e)
		{
			echo 'blad serwera';
		}
		
	    header('Location: PPiW_shop.php');
    
  