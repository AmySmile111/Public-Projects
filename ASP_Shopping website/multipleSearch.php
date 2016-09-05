
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
        displayPageHeader("Result");
    }

displayPageNav();


if (isset($_GET['type']))
{
 
$Type = $_GET['type'];
$_SESSION["Type"] = $Type;

}
       
  
if(!empty($_POST['Size'])&!empty($_SESSION["Type"])&empty($_POST['Color'])) {
    foreach($_POST['Size'] as $Size) {
            //echo 'Size:'.$Size." "; 
            $productListBySize = getProductsByTypeSize($_SESSION["Type"],$Size);
            foreach($productListBySize as $one){
                $SizeList[]=$one;
            }       
    }
    //print_r($SizeList); 
 
    if(!empty($SizeList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $SizeList)));
    //print_r($productList);
    }
}

if(!empty($_POST['Size'])&empty($_SESSION["Type"])&empty($_POST['Color'])) {
    foreach($_POST['Size'] as $Size) {
            //echo 'Size:'.$Size." "; 
            $productListBySize = getProductsBySize($Size);
            foreach($productListBySize as $one){
                $SizeList[]=$one;
            }       
    }
    //print_r($SizeList); 
   
    if(!empty($SizeList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $SizeList)));
   // print_r($productList);
    }
}

if(!empty($_POST['Color'])&!empty($_SESSION["Type"])&empty($_POST['Size'])) {
    foreach($_POST['Color'] as $Color) {
            //echo 'Color:'.$Color." "; 
            $productListByColor = getProductsByTypeColor($_SESSION["Type"],$Color); 
            foreach($productListByColor as $one){
                $ColorList[]=$one;
            }   
    }
   // print_r($ColorList);
   
    if(!empty($ColorList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $ColorList)));
    //print_r($productList);
    }
}
if(!empty($_POST['Color'])&empty($_SESSION["Type"])&empty($_POST['Size'])) {
    foreach($_POST['Color'] as $Color) {
            //echo 'Color:'.$Color." "; 
            $productListByColor = getProductsByColor($Color); 
            foreach($productListByColor as $one){
                $ColorList[]=$one;
            }   
    }
   // print_r($ColorList);
  
    if(!empty($ColorList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $ColorList)));
  //print_r($productList);
    }
}

if(!empty($_POST['Color'])&!empty($_POST['Size'])&!empty($_SESSION["Type"])) {
    foreach($_POST['Color'] as $Color) {
           foreach($_POST['Size'] as $Size) {
                   // echo 'Size:'.$Size." "; echo 'Color:'.$Color." ";
                    $productListBySizeColor = getProductsByTypeSizeColor($_SESSION["Type"],$Size,$Color);
                   foreach($productListBySizeColor as $one){
                        $SizeColorList[]=$one;
                     }    
    }
    }
    //print_r($SizeColorList);
   
    if(!empty($SizeColorList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $SizeColorList)));
    //print_r($productList);
    }
}
if(!empty($_POST['Color'])&!empty($_POST['Size'])&empty($_SESSION["Type"])) {
    foreach($_POST['Color'] as $Color) {
           foreach($_POST['Size'] as $Size) {
                    //echo 'Size:'.$Size." "; echo 'Color:'.$Color." ";
                    $productListBySizeColor = getProductsBySizeColor($Size,$Color);
                   foreach($productListBySizeColor as $one){
                        $SizeColorList[]=$one;
                     }    
    }
    }
    //print_r($SizeColorList);
   
    if(!empty($SizeColorList)) {
    $productList= array_map("unserialize", array_unique(array_map("serialize", $SizeColorList)));
    //print_r($productList);
    }
}

if(empty($_POST['Color'])&empty($_POST['Size'])&!empty($_SESSION["Type"])) {
    $productList = getProductsByType($_SESSION["Type"]);
}
   
if(empty($_SESSION["Type"])){
    $TypeNow="All Types";
}else{
    $TypeNow=$_SESSION["Type"];
}
?>

<section>
<?php


echo '<p>You searched for Product Type: '. $TypeNow.'</p>';


//print_r($productList);

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
   unset($_SESSION['Type']);
}

//displayPageFooter();

?>
