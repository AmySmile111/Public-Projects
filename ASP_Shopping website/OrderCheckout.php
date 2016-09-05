<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once ('shopCartMain.php');
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

if (!isset($_SESSION['aCart']) || count($_SESSION['aCart']->getCartItems()) == 0)
{
    header('Refresh: 5; URL=shopsearch.php');
    echo '<h2>You shopping cart is empty <br /> You will be redirected to our store in 5 seconds.</h2>';
    echo '<h2>If you are not redirected, please <a href="shopsearch.php">Click here to visit our Store</a>.</h2>';
    die();
}


require_once('logincheck.php');
require_once ('projectSql.php');

$cartItems = count($_SESSION['aCart']->getCartItems());
$contactName = $_SESSION['userInfo']['FirstName'];


$output = <<<HTML
<section>
<h2 style="text-align: center">You have $cartItems product(s) for your order</h2>

<table>
    <tr>
        <th></th>
        <th>Item Name</th>
        <th>Item Quantity</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;Item Size</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;Unit Price</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;Extended price&nbsp;&nbsp;</th>
        <th></th>
    </tr>
HTML;

$cartList2=$_SESSION['aCart']->getCartItems(); 
while (list($key, $val) = each($cartList2))
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
    $output .= <<<HTML
    <tr>
            <td><img  src="images/$ImgName.jpg" height="160" width="110"></td> 
        <td>
             &nbsp;&nbsp;$ProductName&nbsp;&nbsp;
        </td>
        <td style="text-align: right">
            <form action="information.php" method="post">
                <input type="hidden" name="ProductPK" value="$key" />
          
            </form>
            
            $qty   
        </td>
            <td style="text-align: right">
            $size
        </td>
        <td style="text-align: right">
            $$formattedPrice
        </td>
        <td style="text-align: right">
            $$formattedExtendedPrice
        </td>
    
            
    </tr>
           
HTML;
}
$formattedTotalPrice = number_format($totalPrice,2);
$output .= <<<HTML
    <tr>
        <td colspan="3" style="text-align: center">
            <b>Your order total is: $$formattedTotalPrice</b>
        </td>
        <td colspan="3" style="text-align: center">
        <form action="information.php" method="post">
            <input type="submit" name="submit" id="PlaceOrder" value = "NEXT" />
        </form>
        </td>
    </tr>
</table>
<p style="text-align: center">
    <a href="home.php">[Continue shopping]</a>
</p>
</section>
HTML;




echo($output);



displayPageFooter();
