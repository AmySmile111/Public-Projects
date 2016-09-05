<?php
/*
    Purpose: Demo6 - CRUD Operations
    Author: LV
    Date: October 2015
    Uses: siteCommon.php, d6sql.php
    Action: d6add1a.php
 */

require_once ("projectSql.php");
require_once ('shopCartMain.php');



// call the displayPageHeader method in siteCommon.php

$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();


require_once ('siteCommon1.php');
$logFName = (isset($_SESSION['userInfo']))?$_SESSION['userInfo']['FirstName'] : "";  

if (!empty($logFName))
    {
      displayPageHeaderLog($logFName);
    }
    else
    {
        displayPageHeader($pageTitle);
    }

displayPageNav1();



// assign form values to variables
$NameLast = (isset($_POST['NameLast'])) ? trim($_POST['NameLast']) : '';
$NameFirst = (isset($_POST['NameFirst'])) ? trim($_POST['NameFirst']) : '';
$Phone = (isset($_POST['Phone'])) ? trim($_POST['Phone']) : '';
$ShipStreet = (isset($_POST['ShipStreet'])) ? trim($_POST['ShipStreet']) : '';
$ShipCity = (isset($_POST['ShipCity'])) ? trim($_POST['ShipCity']) : '';
$ShipState = (isset($_POST['ShipState'])) ? trim($_POST['ShipState']) : '';
$ShipZip = (isset($_POST['ShipZip'])) ? trim($_POST['ShipZip']) : '';
$CardNum = (isset($_POST['CardNum'])) ? trim($_POST['CardNum']) : '';
$CardName = (isset($_POST['CardName'])) ? trim($_POST['CardName']) : '';
$ExpirDate = (isset($_POST['ExpirDate'])) ? trim($_POST['ExpirDate']) : '';
$CVN = (isset($_POST['CVN'])) ? trim($_POST['CVN']) : '';
$BillStreet = (isset($_POST['BillStreet'])) ? trim($_POST['BillStreet']) : '';
$BillCity = (isset($_POST['BillCity'])) ? trim($_POST['BillCity']) : '';
$BillState = (isset($_POST['BillState'])) ? trim($_POST['BillState']) : '';
$BillZip = (isset($_POST['BillZip'])) ? trim($_POST['BillZip']) : '';
$DeliveryMethod = (isset($_POST['DeliveryMethod'])) ? trim($_POST['DeliveryMethod']) : '';

$Customeremail=$_SESSION['userInfo']['Email'];
$userList = getuserId($Customeremail);
extract($userList[0]);
//echo $UserPK;
$shipName=$NameLast." ".$NameFirst;
//echo $CustomerPK;
$date=date("Y/m/d H:i:s");
//echo"abcd";
if (isset($_POST['submit123']))
    {
    
      addProductOrder($UserPK,$CardName,$CardNum, $Phone,$shipName,
             $ShipStreet,$ShipCity,$ShipState,$ShipZip,$CardNum,$CardName,$ExpirDate,$CVN,
              $BillStreet,$BillCity,$BillState,$BillZip,$DeliveryMethod,$date);
    
    //addProductOrder2($CustomerPK);
    
  $orderID=getOrderID();
   $oderID= $orderID[0]['']; ;
   //echo $oderID;
  $a=(int)$oderID;
  echo $a;
   
     
  $cartList2=$_SESSION['aCart']->getCartItems(); 
  while (list($key, $val) = each($cartList2))
  {
      $ob=$val;
     $size=$ob->OrderSize;
     $qty=$ob->OrderQty;
     $productID=$ob->ProductPK;
       addOrderItem($a,$productID,$qty,$size);
      
      
  }//while
 
  
  
 
   $IDO= $orderID[0][''];
    $_SESSION['IDO'] = $IDO;
    
    header('location:confirmation.php');
  die();
    }
   


?>

<!--<script src="HOE5Lib.js" type="text/javascript"onsubmit="return checkForm(this)"></script>-->

<form name ="addInformation" id="addInformation" action="information.php" method="post" >
   
    <fieldset class="noBG">
    <div id="PaymentDelivery">
        <ul>
            <li><h2>Payment and Delivery</h2></li>
            <li>   
                <label for="CardNum">Card Name:</label>        
                <input type="text" name="CardName" id="CardNum" value="<?php echo $CardNum; ?>" required="required" pattern="^[a-zA-Z\s\.\']*$"  />
            </li>  
            <li>   
                <label for="CardNum">Card Number:</label>        
                <input type="text" name="CardNum" id="CardNum" minlength="13" maxlength="16" value="<?php echo $CardNum; ?>" pattern="^[0-9]{12,19}$" required="required" title="Card number is 12-19 numeric digits" />
            </li>  
            <li>    
                 <label for="ExpirDate">Expiration Date:</label>                         
                <input type="text" name="ExpirDate" id="ExpirDate" maxlength="10" placeholder="MMYY"
                       value="<?php echo $ExpirDate; ?>" required="required" pattern="^(0[1-9]|1[0-2])[0-9][0-9]$" /> 
            </li>
            <li>
                <label for="CVN">CVN:</label>        
                <input type="text" name="CVN" id="CVN" minlength="3" maxlength="4" value="<?php echo $CVN; ?>" required="required" pattern="^[0-9]{3,4}$" title="CVN is 3 or 4 numeric digits"/>
            </li>
            <fieldset>
            <legend>BILL TO:</legend>
             <li>
                <label for="BillAddress">Street:</label>   
                <input type="text" name="BillStreet" id="BillAddress" maxlength="50" required="required" 
                       pattern="^[a-zA-Z0-9\s\.\']*$" value="<?php echo $BillStreet; ?>"/>
            </li>
            <li>
                <label for="BillCity">City:</label>   
                <input type="text" name="BillCity" id="BillCity" maxlength="14" required="required" 
                       pattern="^[a-zA-Z\s\.\']*$" value="<?php echo $BillCity; ?>" />
            </li>
            <li>
                <label for="BillState">State:</label>   
                <input type="text" name="BillState" id="BillState" maxlength="10" required="required" 
                       pattern="^[a-zA-Z\s\.\']*$" value="<?php echo $BillState; ?>" />
            </li>
            <li>
                <label for=BillZip">ZIP code:</label>   
                <input type="text" name="BillZip" id="BillZip" maxlength="5" required="required" 
                       pattern="[0-9]{5}" value="<?php echo $BillZip; ?>" title="ZIP code is 5 numeric digits"/>
            </li></fieldset>
            <li>  
                <br /><label>Delivery Method:</label>
            </li>
            <li>
                    <label for="DeliveryMethod">Ground Shipping</label>
                    <input required type="radio" name="DeliveryMethod" id="DeliveryMethod" value="Ground" />
                    <label for="DeliveryMethod">2-Day Shipping</label>
                    <input type="radio" name="DeliveryMethod" id="DeliveryMethod" value="2-Day"/>
            
            </li>  
        </ul>
    </div>
   <div id="shippingBilling">
        
        <ul>
            <li><h2>Shipping Address</h2></li>
            <li>
                <label for="NameLast">Last name:</label>   
                <input type="text" name="NameLast" id="NameLast" maxlength="30" autofocus="autofocus" 
                       required="required" pattern="^[A-Za-z\.\']+$" onfocus="this.select()" value="<?php echo $NameLast; ?>"/>
            </li>
            <li>
                <label for="NameFirst">First name:</label>   
                <input type="text" name="NameFirst" id="NameFirst" maxlength="30" required="required" 
                       pattern="^[A-Za-z\.\']+$" value="<?php echo $NameFirst; ?>"/>
            </li>
         
            <li>
                <label for="Phone">Phone number:</label>
                <input name="Phone" id="Phone" placeholder="nnn-nnn-nnnn" type="text" 
                      pattern="^\d{3}-\d{3}-\d{4}$" title="123-456-7890" value="<?php echo $Phone; ?>" />
            </li>
           
            <li>
                <label for="ShipAddress">Street:</label>   
                <input type="text" name="ShipStreet" id="ShipAddress" maxlength="50" required="required" 
                       pattern="^[a-zA-Z0-9\s\.\']*$" value="<?php echo $CVN; ?>"/>
            </li>
            <li>
                <label for="ShipCity">City:</label>   
                <input type="text" name="ShipCity" id="ShipCity" maxlength="14" required="required" 
                       pattern="^[a-zA-Z\s\.\']*$" value="<?php echo $ShipCity; ?>"/>
            </li>
            <li>
                <label for="ShipState">State:</label>   
                <input type="text" name="ShipState" id="ShipState" maxlength="10" required="required" 
                       pattern="^[a-zA-Z\s\.\']*$" value="<?php echo $ShipState; ?>"/>
            </li>
            <li>
                <label for="ShipZip">ZIP code:</label>   
                <input type="text" name="ShipZip" id="ShipZip" maxlength="5" required="required" 
                       pattern="[0-9]{5}" value="<?php echo $ShipZIP; ?>" title="ZIP code is 5 numeric digits"/>
            </li>
           
        </ul>
    </div>
    
    <p id="infoSummit">
        <br />
      <input type="submit" value="SUMMIT" name="submit123" />
    </p>  
    </fieldset>
</form>

<?php

// call the displayPageFooter method in siteCommon.php

displayPageFooter();
?>