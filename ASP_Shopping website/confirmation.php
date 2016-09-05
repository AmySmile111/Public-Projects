
<?php
/*
    Purpose:Search
    Author: Xin Tian
    Date: 02 25 2016
    Uses: siteCommon.php, sql.php
    Action for: d4search2.php
 */
require_once ('shopCartMain.php');
$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();
require_once ("projectSql.php");



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


$name=$_SESSION['userInfo']['FirstName'];
$OrderID=rand(100000,999999);
        //md5(uniqid(rand(), true)) ;
$date=date("Y/m/d");

$orderID=getOrderID();
   $oderID= $orderID[0]['']; ;
   //echo $oderID;
  $a=(int)$oderID;
$orderListt=getOrderList($a);
//print_r($orderListt);
extract($orderListt[0]);
$addre=$ShipName." ".$ShipStreet." ".$ShipCity." ".$ShipState." ".$ShipZip;
//echo $ShipStreet;
$card="XXXXXXXXX".substr($CardNum,-4);




$output = <<<HTML
<section id="ConfirmationForm">
   <fieldset class="noBG"> 
   <table id="allOrders">
        
        <thead>
         <tr>
              <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <thead>
        <tr>
            <td colspan="4" >
                Hi $name,<br />
                Thanks for shopping! Please find details of your order below.
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Order #: $oderID
            </td>
        </tr>
        <tr>
            <td colspan="2">
                 Date: $date
  
            </td>
        </tr>
        <tr>
            <td colspan="2">
                 Ship to: $addre
            </td>
            <td colspan="2">
               
            </td>
        </tr>
        <tr>
            <td colspan="2" >
                Payment:
               Card ending in $card
            </td>
            <td colspan="2" rowspan="2">
             
            </td>
        </tr>
  <tr>
            <td><br />Your Product is below:</td>
            </tr>
HTML;

$cartList=$_SESSION['aCart']->getCartItems(); 
while (list($key, $val) = each($cartList))
{  
     $id=$key;
     $id1= intval($id);
     //echo $id;
     $ob=$val;
     $size=$ob->OrderSize;
     $qty=$ob->OrderQty;
     
     $product=getProductByID2($id1);
     //print_r($product);
     extract($product[0]);
    $extendedPrice = $qty * $Price;
    $totalPrice += $extendedPrice;
    $formattedExtendedPrice = number_format($extendedPrice, 2);
    $formattedPrice = number_format($Price, 2);
    
    //$output .= <<<HTML
    
    
    
    $output .= <<<HTML
            
   
   <tr>
       
        <td colspan="2">
           Name: $ProductName
        </td>
         <td>
            &nbsp;&nbsp;&nbsp;Size: $size
        </td>   
        <td >
           &nbsp;&nbsp;&nbsp;Qty: $qty
        </td>
        <td >
            &nbsp;&nbsp;&nbsp;Price: $$formattedExtendedPrice
        </td>
            
    </tr>
    
   
           
HTML;
}
$formattedTotalPrice = number_format($totalPrice,2);

$output .= <<<HTML
         <tr>
            <td colspan="3">
            <br />
                Order Total Price: $$formattedTotalPrice 
            <br />
            </td>
       
        </tr>
        <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
 <td colspan="6" style="text-align:center"><form id="summitForm" action="placeOrder.php" method = "post"   >
            <input type="submit" value="PLACE ORDER" name="submit" />
            </form></td>
</fieldset>
     </table></section>
HTML;

echo $output;

// call the displayPageFooter method in siteCommon.php

displayPageFooter();

?>
