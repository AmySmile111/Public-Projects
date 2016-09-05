<?php
$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params ($session_lifetime);
session_start();
require_once ("siteCommon1.php");
include_once ('projectSql.php');


unset($_SESSION['Type']);


// call the displayPageHeader method in siteCommon.php
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
?>

<section>
<img id="homePicture" src="images/fairytale.jpg" width="1020" height="310">
<?php

// if the form was submitted (for a new search) or a previous user is revisiting this page,
// display results for the current search or his/her last search
  
    $products=  getProductList("");
    $resultsCount = count($products);
    $counter = 0;

    $output = <<<ABC
    <table id="product">
      <tr>
ABC;

    foreach ($products as $aProduct) {
        extract($aProduct);
        //$merchandiseprice = number_format($merchandiseprice,2,'.',',');
        $output .= <<<ABC
            <td class="atd">
ABC;
        if ($ImgName != '') {
            $output .= <<<ABC
<a href="productDetail.php?productPK=$ProductPK"> <img src="images/$ImgName.jpg" width="220" height="320"></a><br />
ABC;
        }
        $output .=<<<ABC
 <a class="hplink" href="productDetail.php?productPK=$ProductPK" style="font-size:14px"> $ProductName </a>  <br />
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


displayPageFooter();
?>