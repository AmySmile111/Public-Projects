<?php

require_once ('shopCartMain.php');
require_once ('projectSql.php');
require_once ('QtySize.php');
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
    header('Refresh: 3; URL=home.php');
    echo "<h2 style='color:pink'>You shopping cart is empty <br /> You will be redirected to our store in 3 seconds.</h2>";
   
    die();
}

//test
$c="c";
$userList = $_SESSION['userInfo'];
//print_r($userList);

$Customeremail=$_SESSION['userInfo']['Email'];

/*$a=$_SESSION['aCart']->getCartItems();
//echo $a;
$c=-1;
 $productIDs1=array();
while (list($key, $val) = each($a)){
     $c++;
   
    $d=$val->getProductPK();
    $productIDs1[$c]=$d;

            
}
  print_r($productIDs1)   ;
$productIDs2=join(',',$productIDs1);

  echo   $productIDs2;

//$productIDs = join(',',array_keys($_SESSION['aCart']->getCartItems()));//all product ids


$cartList =getProdyctInCart($productIDs2);// product table */

$cartItems = count($_SESSION['aCart']->getCartItems());



$output = <<<HTML
<section>
<h2 style="text-align: center">You have $cartItems product(s) in your cart</h2>

<table id="cartForm">
    <tr>
        <th></th>
        <th>Item Name</th>
        <th>Item Quantity</th>
        <th>&nbsp;&nbsp;Item Size</th>
        <th>&nbsp;&nbsp;Unit Price</th>
        <th>&nbsp;&nbsp;Extended price&nbsp;&nbsp;</th>
        <th></th>
    </tr>
HTML;
//print_r($_SESSION['aCart']);
//print_r($cartList);

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
     
     //echo $ProductName;
    
    
   
    $extendedPrice = $qty * $Price;
    $totalPrice += $extendedPrice;
    $formattedExtendedPrice = number_format($extendedPrice, 2);
    $formattedPrice = number_format($Price, 2);
    $output .= <<<HTML
    <tr>
     <td><img src="images/$ImgName.jpg" height="160" width="110"></td>  
        <td>
            &nbsp;&nbsp;$ProductName&nbsp;&nbsp;
        </td>
        <td>
            <form action="addUpdateDeleToCart.php" method="post">
                <input type="hidden" name="ProductPK" value="$key" />
                <input type="hidden" name="ProductSize1" value="$size" />
                <input type="number" name="ProductQty" value="$qty" size="2" maxlength="2" required="required" min="0" max="50" />
                <input type="submit" name=submit" value="Update Quantity" />
           
            </form>      
        </td>
            <td style="text-align: right">
            $size
        </td>
        <td style="text-align: right">
            $$formattedPrice
        </td>
        <td style="text-align: right">
            $$formattedExtendedPrice&nbsp;&nbsp;
        </td>
            
          <td>
           <form action="addUpdateDeleToCart.php" method="post">
                <input type="hidden" name="ProductPK1" value="$id" />
                <input type="submit" name="submit1" value="delete" />
            </form>
            
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
        <form action="OrderCheckout.php" method="post">
            <input type="submit" name="submit" id="proceed" value = "Proceed to Checkout" />
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

?>


