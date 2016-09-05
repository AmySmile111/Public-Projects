<?php
/* 
    Purpose: Securing Applications
    Author: LV
    Date: October 2015
    Uses: siteCommon1.php, d8sql.php
 */
$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();


require_once ("projectSql.php");

// Set local variables to $_POST array elements (userlogin and userpassword) or empty strings

$Email = (isset($_POST['Email'])) ? trim($_POST['Email']) : '';
$Password = (isset($_POST['Password'])) ? trim($_POST['Password']) : '';
   
/*  $_REQUEST is an associative array that contains the contents of $_GET, $_POST, and $COOKIE
    $_REQUEST is used because the redirect file name could be received by this script
    either through the URL ($_GET) or as a form varaiable ($_POST).
    The first time this script is accessed the redirect file name
    will be in the URL (see d8logincheck.php).  On subsequent accesses, the redirect file name
    will be passed as a form variable (see below, where $redirect is used to set a hidden field)
 */

$redirect = (isset($_REQUEST['redirect'])) ? $_REQUEST['redirect'] : 'home.php';

// if the form was submitted

if (isset($_POST['login']))
{
    //Call getUser method to check credentials

    $userList = getCustomer($Email, $Password);
    extract($userList[0]);
    if (count($userList)==1) //If credentials check out
    {
        

        // assign user info to an array

        $userInfo = array('UserPK'=>$UserPk, 'Email'=>$Email, 'FirstName'=>$FirstName, 'Password'=>$Password);

        // assign the array to a session array element

        $_SESSION['userInfo'] = $userInfo;
        session_write_close(); //typically not required; ensures that the session data is stored

        // redirect the user
         //echo $_SESSION['userInfo']['abc'];
       echo $Email;
        header('location:' . $redirect);
        die();
    }

    else // Otherwise, assign error message to $error
    {
        $error = 'Invalid login credentials. Please try again.';
    }
}


elseif (isset( $_SESSION['userInfo'])) 

{
     $Email=$_SESSION['userInfo']['Email'];
     $Password=$_SESSION['userInfo']['Password'];
  
    $userList = getCustomer($Email, $Password);
     echo $_SESSION['userInfo']['Email'];
    
    if (count($userList)==1){ extract($userList[0]);}
    
     header('location:' . $redirect);
        die();
    
}
















// display form

require_once ("siteCommon1.php");

// call the displayPageHeader method in siteCommon.php

displayPageHeader("Login");
displayPageNav1();
echo "<section>";
// if error variable was set, display it

if (isset($error))
{
    echo '<p id="error">' . $error . '</p>';
}
?>
<div id="form">
      <form id="loginForm" name="loginForm" action="login.php" method="post">

          <fieldset class="loginRegister">
<!--              <legend>Registered Customers</legend>-->
              <p>If you have an account with us, please log in.</p> 

              <ul class="form-list">
                   <input type="hidden" name ="redirect" value ="<?php echo $redirect ?>" />
                  <li>
                      <div class="input-box">
                          <label for="email">Email</label>
                          <input type="email" name="Email" id ="Email" value="<?php echo $Email; ?>"
                                  autofocus="autofocus" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Email has invalid characters or invalid fomat" />
   
                      </div>
                  </li>
                  <li>
                      <div class="input-box">
                          <label for="password">Password</label>
                          <input type="password" name="Password" id="Password" value="<?php echo $Password; ?>"
                                 maxlength="20" required="required" pattern="^[a-zA-Z0-9]{8,16}" title="password is 8-16 digit numbers or characters" /> 
                      </div>
                  </li>
                 
                  <li class="buttons-set">
                       <input type="submit" value="Sign in" name="login" /> <br />
                         New customer?  <a style="color:#ff80bf" href="register.php">Register Here</a>
                  </li>
                 
              </ul>

          </fieldset>
          
        
     
      </form>
  </div>

</section>
<?php
// call the displayPageFooter method in siteCommon.php

displayPageFooter();
?>
