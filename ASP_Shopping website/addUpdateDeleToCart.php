<?php
/* 
    Purpose: Online Store
    Author: LV
    Date: October 2015
*/

require_once ('ShopCartMain.php');
require_once ('QtySize.php');
$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();
$size1=(string)$_POST['size'];
$qty1=$_POST['quantity'];
$ProductPK=$_POST['ProductPK'];
//$lan=$_GET['ProductPK1'];
//echo $_POST['ProductPK1'];
//echo $lan;
//$orignQty=;
//$QtySizeOrder=new QtySize($qty1,$size1,$ProductPK);

//$QtySizeOrder2=new QtySize($qty1,$size1,$ProductPK);





// if the form element merchandisepk is set

if (isset($_POST['ProductPK']))
{
    // if the session element aCart is not set

    if (!isset($_SESSION['aCart']))
    {
        // instantiate a shopCart object

        $_SESSION['aCart'] = new shopCart();
       
    }
    
    if (isset($_POST['ProductQty']))
        
        {
              //$QtySizeOrder=new QtySize($_POST['ProductQty'],$_POST['ProductSize1']);
        
        
              $_SESSION['aCart']->updateCartItem($_POST['ProductPK'],$_POST['ProductQty']);
            
            
        }
        
 
    if(isset($_POST['quantity']))    
    {
        
        
        
        
         $_SESSION['aCart']->addCartItem($_POST['ProductPK'],$qty1,$size1);
        
        //$_SESSION['aCart']->addCartItem($_POST['ProductPK'],$QtySizeOrder);
        
    }
    
    
    
    
    
    
    
    
}



//elseif(isset($_POST['ProductPK1'])) 
elseif(($_POST['submit1'])=="delete") 
{
  //print_r($_SESSION['aCart']);
    //$tmp=$_GET['ProductPK1']." ";
    echo $_POST['ProductPK1'];
  $_SESSION['aCart']->deleteCartItem($_POST['ProductPK1']);
   
   //print_r($_SESSION['aCart']);
}

else{echo"There is not this product";}

header('location:shoppingCart.php');
exit();
?>
