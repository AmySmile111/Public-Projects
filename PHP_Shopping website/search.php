
<?php
/*
    Purpose:Search
    Author: Xin Tian
    Date: 02 25 2016
    Uses: siteCommon.php, sql.php
    Action for: d4search2.php
 */
$session_lifetime = 3600 * 24 * 2; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();


require_once ("projectSql.php");
require_once ("siteCommon1.php");

$logFName = (isset($_SESSION['userInfo']))?$_SESSION['userInfo']['FirstName'] : "";  

if (!empty($logFName))
    {
      displayPageHeaderLog($logFName);
    }
    else
    {
        displayPageHeader("Results");
    }

displayPageNav();






if (isset($_POST['Search']))
{
 
$ProductName = $_POST['ProductName'];
$ProductName = preg_replace("/[^a-zA-Z\s]/", '', $ProductName);
  $productInfo = array('ProductName'=>$ProductName);  
    $_SESSION['productInfo'] = $productInfo;
    session_write_close();
}


elseif (isset( $_SESSION['productInfo'])) 

{
    $ProductName= $_SESSION['productInfo']['ProductName'];
}















?>

<section>
<?php
$heading = <<<ABC
<p>You searched for Product Name: '$ProductName'</p> 
ABC;

echo $heading;

$productList = getProductsByName($ProductName);

$matchingRecords = count($productList);



if ($matchingRecords == 0)
{
   echo "<p>No matches found for the search term(s)</p>";
}
else
{   

    $counter = 0;

    $output = <<<ABC
    <table id="searchResults">
            <caption>$matchingRecords product(s) found</caption>
      <tr>
ABC;

    foreach ($productList as $aProduct) {
        extract($aProduct);
        
          
        
        
        
        
        
        //$merchandiseprice = number_format($merchandiseprice,2,'.',',');
        $output .= <<<ABC
            <td class="atd">
ABC;
        if ($ImgName != '') {
            $output .= <<<ABC
<img src="images/$ImgName.jpg" width="220" height="320"><br />
ABC;
        }
        $output .=<<<ABC
 <a class="hplink" href="productdetail.php?productpk=$productpk" style="font-size:14px"> $ProductName </a>  <br />
<p style="font-size:15px"> \$$Price </p> <br />
</td>
ABC;
        $counter ++;

        if ($counter == $resultsCount) {
            $output .= <<<ABC
                </tr> </table>
ABC;
        }
        elseif ($counter % 4 == 0) {
            $output .= <<<ABC
                </tr><tr>
ABC;
        }
    }

    echo $output;
    echo "</section>";
}

//displayPageFooter();

?>
