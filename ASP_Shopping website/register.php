<?php
/*
    Purpose: Demo8 - Securing Applications
    Author: LV
    Date: October 2015
    Uses: siteCommon1.php, d8sql.php
 */

require_once ("projectSql.php");

// assign form values to variables
$Email = (isset($_POST['Email'])) ? trim($_POST['Email']) : '';
$Password = (isset($_POST['Password'])) ? trim($_POST['Password']) : '';
$FirstName = (isset($_POST['FirstName'])) ? trim($_POST['FirstName']) : '';
$LastName = (isset($_POST['LastName'])) ? trim($_POST['LastName']) : '';

// if the form was submitted

if (isset($_POST['register']))
{
    // check whether the username already exists

    $result = findDuplicateCustomer($Email);

    if (count($result) > 0)
    {
        $error = 'This Email has been registered.';
    }
    else
    {
        // insert new record

        addCustomer($Email, $Password, $FirstName, $LastName);

        //redirect user to login page

        header('Refresh: 1; URL=login.php');
        echo '<h2>Thank you for Registering.  You will now be redirected to the login page.<h2>';
        die();
    }
}
require_once ("siteCommon1.php");

// call the displayPageHeader method in siteCommon.php

displayPageHeader("Register");
displayPageNav1();
echo "<section>";
// if the user chose a duplicate username, display error

if (!empty($error))
{
    echo '<p style="text-align:center" id="error">' . $error . '</p>';
}
?>

<form name ="addUserForm" id="addUserForm" action="register.php" method="post">
    <fieldset class="loginRegister">
<!--        <legend>New Customers</legend>-->
        <ul> 
            <li>  
            <label for="Email">Email:</label>
           <input type="email" name="Email" id ="Email" value="<?php echo $Email; ?>" class="ten" maxlength="40" autofocus="autofocus" required="required"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
           </li> 
           <li>
           <label for="userPassword">Password:</label> 
           <input type="Password" name="Password" id="Password" value="<?php echo $Password; ?>" class="ten" maxlength="20" required="required" pattern="^[a-zA-Z0-9]{8,16}$" title="password is 8-16 digic numbers or characters" />
           </li>
           <li>
           <label for="firstname">First Name:</label>
           <input type="text" name="FirstName" id ="FirstName" value="<?php echo $FirstName; ?>" maxlength="20" class="twenty" required="required" pattern="^[a-zA-Z-]+$" title="First Name has invalid characters" />
           </li>
           <li>
           <label for="lastname">Last Name:</label>
           <input type="text" name="LastName" id ="LastName" value="<?php echo $LastName; ?>" maxlength="20" class="twenty" required="required" pattern="^[a-zA-Z-]+$" title="Last Name has invalid characters" />
           </li>
           <li>
              <input type="submit" value="Register" name="register" /> 
              </li>
        </ul>
    </fieldset>
</form>
</section>

<?php
// call the displayPageFooter method in siteCommon.php

displayPageFooter();

?>