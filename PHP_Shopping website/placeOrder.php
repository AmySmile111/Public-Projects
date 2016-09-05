<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();

$a= substr(md5(rand()), 0, 8);



echo"<h1 style='color:pink'>Your order is successfully placed. Thank you for shopping with us.<h2>";

    


// for a single variable
unset($_SESSION['aCart']); 
    //setcookie($_SESSION['aCart'],"",time()-3600); //destroy the session cookie on the client








header('Refresh: 3; URL=home.php');
    echo "<h2 style='color:grey'>You will go to our home page<br /> You will be redirected to our store in 3 seconds.</h2>";
   
    die();