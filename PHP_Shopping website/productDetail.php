<?php
$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();
require("projectSql.php");
require_once ("siteCommon1.php");

unset($_SESSION['Type']);
$logFName = (isset($_SESSION['userInfo']))?$_SESSION['userInfo']['FirstName'] : "";  

if (!empty($logFName))
    {
      displayPageHeaderLog($logFName);
    }
    else
    {
        displayPageHeader($pageTitle);
    }

displayPageNav();

if ((isset($_GET['productPK'])) && (is_numeric($_GET['productPK'])))
{
    
     $productList = getProductByID((int)$_GET['productPK']);
 
}


if(count($productList) >= 1)
{
       
    extract($productList[0]);  
    
    
}

else{
    
    echo"There is no this record";
    die();
}

      
 $a=count($productList);

 
 for ($x = 0; $x < $a; $x++) {
                $size[$x]=$productList[$x][Size];     
        }

?>



<!DOCTYPE html>

<html lang="en-US">
<head>
    <link rel="stylesheet" type="text/css" href="productDetail.css">

</head>
<body>
   
     <section id="main">
       
           <img src="images/<?php echo $ImgName; ?>.jpg" width="400" height="620"><br />
            
       

    </section>
   

    <section id="right">
        
        <div id="r1">
            <h1 style="font-size:25px"><?php echo $ProductName; ?></h1>
            <h2>$<?php echo $Price; ?></h2>
        </div>
        <div id="r2">
            <h3>COLOR: <ins><?php echo $Color; ?></ins></h3>
            <h3>SIZE:</h3>
            <section style="margin-top :-10px">
               <form id="AddtoCart" name="AddtoCart" action="addUpdateDeleToCart.php" method="post">
                   <input type="hidden" name="ProductPK" value =<?php echo $ProductPK; ?> />
                <?php
              
                for ($x = 0; $x < $a; $x++) {
                 
         $showSize .= <<<ABC
            <input type="radio" name="size" value="$size[$x]" required> $size[$x]
ABC;
    
                
                
                }
                
             
                
                echo $showSize;
                
                
                ?>
                
            </section>
            <h3>Qty:</h3>
            <div id="r22" style="margin-top :-10px">
            
                    <input type="number" name="quantity" min="1" max="50" value="1">
            
            </div>
            </div>
        <div id="detail">
            <h3>DETAILS</h3>
            <p style="font-size:15px"><?php echo $Description; ?></p>
            <p>Model wears a size small.</p>

            </div>

        <div id="size">
            <h3>SIZE GUIDE:</h3>
            <table >
                <tr>
                     <th>SIZE</th>
                    <th>US</th>
                    <th>PANT SIZE</th>
                    <th>UNISEX</th>
                </tr>
                <tr>
                   <td>XSMALL</td>
                    <td>0/2</td>
                    <td>24-26</td>
                    <td rowspan="2">XS/S SIZE1</td>
                </tr>
                <tr>
                    <td>SMALL</td>
                    <td>4/6</td>
                    <td>27-28</td>
                </tr>
                <tr>
                    <td>MEDIUM</td>
                    <td>8/10</td>
                    <td>29-30</td>
                    <td rowspan="2">M/L SIZE2</td>

                </tr>

                <tr>
                    <td>LARGE</td>
                    <td>12</td>
                    <td>31-32</td>
                </tr>
            </table>
        </div>
        <div id="button">
         
             <input type="submit" value="Add To Bag" name="AddToBag" style="background-color:white "/>
        </div>
        
        
</form>
</section>
<?php displayPageFooter()?>
   
</body>
</html>