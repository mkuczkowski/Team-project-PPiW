<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>PPiW shop</title>
  <link href="https://fonts.googleapis.com/css?family=Kanit|Montserrat+Subrayada" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="custom_style.css">
  <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
<!-- NAVBAR -->
	<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Featured <span class="sr-only">(current)</span></a></li>
        <li><a href="#">On sale</a></li>
        <li><a href="#">About us</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Game categories <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">RPG</a></li>
            <li><a href="#">FPS</a></li>
            <li><a href="#">Action etc</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">etc</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">...</a></li>
          </ul>
        </li>
      </ul>
      <a class="navbar-brand" id="logo-nav" href="#">PPiW <span id="logo-shop">shop</span></a>
      <ul class="nav navbar-nav navbar-right">
	  
          <li id="signUpBtn"><a href="#"><i class="fas fa-user-plus" style="color: dodgerblue;"></i> Sign Up </a></li> 
          <?php 
		  if(@$_SESSION['correct_login'] === 1)
			  echo '<li id="loginBtn"><a href="logout.php"><i class="fas fa-user" style="color: dodgerblue;"></i> Log out</a></li>' ;
		  else 
		      echo '<li id="loginBtn"><a href="#"><i class="fas fa-user " style="color: dodgerblue;"></i> Log in</a></li>' ;	  
	      ?>		    
		<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart" style="color: orange;"></i> <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">...</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">...</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Find your game here">
        </div>
        <button type="submit" class="btn btn-info"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
      </form>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  	  <?php 
  if((@$_SESSION['bad_login'] === 1) )
  {
	 echo  '<div class="alert alert-danger" role="alert"> Invalid email or password</div>' ;
  } 
  if(@$_SESSION['tooShortOrLongNick'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Nick must have 3-20 letters </div>' ;
  } 
  if(@$_SESSION['OnlyLetterOrNubmerToNick'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Nick must have only letters or number </div>' ;
  } 
  if(@$_SESSION['invalidEmail'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Invalid email</div>' ;
  } 
  if(@$_SESSION['tooShortOrLongPassword'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Password must have 8-20 letters </div>' ;
  } 
  if(@$_SESSION['passwordIsNotEqualTo'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Password is not equal to password-repeat </div>' ;
  } 
  if(@$_SESSION['checkboxIsNotChecked'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Checkbox is not checked </div>' ;
  } 
  if(@$_SESSION['recaptchaIsNotChecked'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Recaptcha is not checked </div>' ;
  } 
  if(@$_SESSION['emailIsAlreadyExist'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Email is already exist </div>' ;
  } 
  if(@$_SESSION['nickIsAlreadyExist'] === 1)
  {
	 echo  '<div class="alert alert-danger" role="alert"> Nick is already exist </div>' ;
  } 
  if(@$_SESSION['correctSignUp'] === 1)
  {
	 echo  '<div class="alert alert-success" role="alert"> Registration completed successfully. You can log in </div>' ;
  } 
?>
</nav>

<div class="container">

   <!-- Modal log in-->
   <div class="modal fade" id="modalLogin" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content" style="background: #ecfcfe;">
          <div class="modal-header" style="background: #dcfcfe;">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Log in</h4>
          </div>
          <div class="modal-body">
              <form action = "signIn.php" method = "post">
                  <div class="form-group">
                      <div class="input-container">
                          <i class="fa fa-envelope icon"></i>
                          <input class="input-field" type="email" placeholder="Email" name="email" required>
                        </div>
                  </div>
                  <div class="form-group">
                      <div class="input-container">
                          <i class="fas fa-key icon"></i>
                          <input class="input-field" type="password" placeholder="Password" name="password" required>
                        </div>
                  </div>     
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-info">Log in</button>
                  <button type="button" class="btn btn-warning" style="float: right;">Forgot password?</button>
                </form>
          </div>      
        </div>
      </div>
    </div>
</div>
<div class="container">
    <!-- Modal sign up -->
    <div class="modal fade" id="modalSign" role="dialog">
       <div class="modal-dialog">
         <div class="modal-content" style="background: #ecfcfe;">
           <div class="modal-header" style="background: #dcfcfe;">
             <button type="button" class="close" data-dismiss="modal">&times;</button>
             <h4 class="modal-title">Sign up</h4>
           </div>
           <div class="modal-body">
               <form action="signUp.php" method = "post">
                  <div class="form-group">
                      <div class="input-container">
                          <i class="fa fa-user icon"></i>
                          <input class="input-field" type="text" placeholder="Username" name="nick" required>
                        </div>
                  </div>
                   <div class="form-group">
                       <div class="input-container">
                           <i class="fa fa-envelope icon"></i>
                           <input class="input-field" type="email" placeholder="Email" name="email" required>
                         </div>
                   </div>
                   <div class="form-group">
                       <div class="input-container">
                          <i class="fas fa-key icon"></i>
                           <input class="input-field" type="password" placeholder="Password" name="password" required>
                         </div>
                   </div> 
                   <div class="form-group">
                      <div class="input-container">
                          <i class="fas fa-key icon"></i>
                          <input class="input-field" type="password" placeholder="Repeat password" name="passwordRepeat" required>
                        </div>
                  </div>       
                   <div class="checkbox">
                     <label>
                       <input type="checkbox" name="rules" required><p>I agree to <a href="#" style="color:dodgerblue">terms & privacy</a>.</p>
                     </label>
                   </div>
                   <div class="g-recaptcha" data-sitekey="6Lc1CHcUAAAAAAGc1QUWW09ttUwMdc53wB5TCDaW" style="padding-bottom: 4%;"></div>
                   <button type="submit" class="btn btn-info">Create account</button>
                 </form>
           </div>      
         </div>
       </div>
     </div>
 </div>
<!-- Slider -->
<div class="container" style="padding-top: 4%;">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>
  
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item">
        <img src="https://i.imgur.com/hnWjQQH.jpg">
      </div>
      <div class="item">
        <img src="https://i.imgur.com/Bi8oNjn.jpg">
      </div>
      <div class="item active">
        <img src="https://image.redbull.com/rbcom/010/2015-04-16/1331717465693_2/0100/0/1/gta-v-pc.jpeg">
      </div>
      <div class="item">
        <img src="https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg">
      </div>
      <div class="item">
        <img src="https://i.redd.it/wzxoxq43j9q01.jpg">
      </div>
    </div>
  
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a> 
  </div>
</div>

<div class="container" id="game_thumbinails">
  <div class="row">
    <div class="col-lg-4 col-sm-6 zoom">
      <div class="thumbnail">
          <img src="https://i.imgur.com/hnWjQQH.jpg">
          <div class="caption">
        <h3>The Witcher 3</h3>
        <p>Price: 25€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" data-toggle="modal" data-target="#gameInfo" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
      </div>
  </div>
  <div id="gameInfo" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal game details-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">The Witcher 3: Wild Hunt</h4>
      </div>
      <div class="modal-body">
      <div class="row">
        <div class="col-xs-6 col-md-6">
        <iframe width="430" height="280" class="thumbnail"
          src="https://www.youtube.com/embed/c0i88t0Kacs">
        </iframe>
        </div>
        <div class="col-xs-3 col-md-1">
        <img width="220" height="280" class="thumbnail"
          src="https://images-na.ssl-images-amazon.com/images/I/91YuZ-kasRL._AC_SX215_.jpg">
        </div>     
      </div>
      <div class="jumbotron">
      <p>Experience the epic conclusion to the story of professional monster slayer, witcher Geralt of Rivia.
         As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy,
          a living weapon that can alter the shape of the world.</p>   
          <h3>Rating: <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span></h3>
          <h3>Price: 25 €</h3>
          </div>
      </div>
      <div class="modal-footer">
      <a href="#" class="btn btn-info" role="button" data-dismiss="modal" >Add to cart <i class="fas fa-shopping-cart"></i></a>
      </div>
    </div>

  </div>
</div>
  <div class="col-lg-4 col-sm-6 zoom">
    <div class="thumbnail">
        <img src="https://www.gry-online.pl/galeria/html/wiadomosci/bigphotos/196831812.jpg">
        <div class="caption">
        <h3>Assassin's Creed: Odyssey</h3>
        <p>Price: 49€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
    </div>
</div>
<div class="col-lg-4 col-sm-6 zoom">
  <div class="thumbnail">
      <img src="https://i.redd.it/wzxoxq43j9q01.jpg">
      <div class="caption">
        <h3>Marvel's Spider-man</h3>
        <p>Price: 59€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom">
  <div class="thumbnail">
      <img src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8lb6R3Yyf6hgXB.B9k.h3a99p.AXB.HT0fqS_chRpDfZP4bn.XwqcFKIvTnoTajNzXN2Fk9r.GJ4vVTI3bZG9IXlLdzte2fdu7ibJuh_SGGzG2p7yy5L9P2mET3OQklo_pfoaQVnN8kcZ2GSSBj0dyTCmZj_GkZVtmo1xI0nK4g-&h=1080&w=1920&format=jpg">
      <div class="caption">
        <h3>Shadow of the Tomb Raider</h3>
        <p>Price: 49€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom">
  <div class="thumbnail">
  <img src="https://images5.alphacoders.com/930/thumb-1920-930953.jpg">
      <div class="caption">
        <h3>Hitman 2</h3>
        <p>Price: 55€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom">
  <div class="thumbnail">
      <img src="https://www.chip.pl/uploads/2018/06/650eh9mS0b3kiegDiVzpTXEEFU5ou9kK.png">
      <div class="caption">
        <h3>Fallout 76</h3>
        <p>Price: 59€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>  
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
      <img src="https://static.digitalitem.trade/shop/wp-content/uploads/2018/06/battlefield-5.jpg">
      <div class="caption">
        <h3>Battlefield V</h3>
        <p>Price: 45€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
      <img src="https://image.redbull.com/rbcom/010/2015-04-16/1331717465693_2/0100/0/1/gta-v-pc.jpeg">
      <div class="caption">
        <h3>Grand Theft Auto V</h3>
        <p>Price: 29€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
  <img src="http://www.wallpapermaiden.com/wallpaper/21366/download/1920x1080/red-dead-redemption-2-artwork.jpg">
      <div class="caption">
        <h3>Red Dead Redemption II</h3>
        <p>Price: 59€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
      <img src="https://www.tabletowo.pl/wp-content/uploads/2018/10/Black-Ops-4-tabletowo-6.jpg">
      <div class="caption">
        <h3>Call of Duty: Black Ops 4</h3>
        <p>Price: 65€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
      <img src="https://img6.gram.pl/thumb/20180907143020.jpg">
      <div class="caption">
        <h3>FIFA 19</h3>
        <p>Price: 49€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
<div class="col-lg-4 col-sm-6 zoom" style="display: none;">
  <div class="thumbnail">
      <img src="https://images7.alphacoders.com/583/583750.jpg">
      <div class="caption">
        <h3>Gothic II</h3>
        <p>Price: 5€</p>
        <p><a href="#" class="btn btn-info" role="button">Add to cart <i class="fas fa-shopping-cart"></i></a> <a href="#" class="btn btn-default" role="button" style="float: right;">Show details <i class="fas fa-info-circle"></i></a></p>
      </div>
  </div>
</div>
</div>
<div id="loadMore" style="margin-left: 23%;">
      <a href="#" class="btn btn-primary btn-lg" style="padding-left: 25%; padding-right: 25%;">Show more games <i class="fas fa-gamepad"></i></a>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function(){
      $("#loginBtn").click(function(){
          $("#modalLogin").modal();
      });
      $("#signUpBtn").click(function(){
          $("#modalSign").modal();
      });
  });
  $(document).ready(function () {
  if ($(".zoom:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".zoom:hidden").slideDown();
      if ($(".zoom:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });
  setTimeout(function() {
    $('.alert').fadeOut('slow');
}, 6000);
  </script>
</body>
</html>