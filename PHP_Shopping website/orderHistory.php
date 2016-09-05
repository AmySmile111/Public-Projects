
<?php

/*
  Purpose:Search
  Author: Xin Tian
  Date: 02 25 2016
  Uses: siteCommon.php, sql.php
  Action for: d4search2.php
 */

$session_lifetime = 3600 * 24 * 3; // 2 days
session_set_cookie_params($session_lifetime);
session_start();
require_once ("projectSql.php");



require_once ('siteCommon1.php');
$logFName = (isset($_SESSION['userInfo'])) ? $_SESSION['userInfo']['FirstName'] : "";

if (!empty($logFName)) {
    displayPageHeaderLog($logFName);
} else {
    displayPageHeader($pageTitle);
}

displayPageNav1();

//print_r($_SESSION['userInfo']);
$useremail = $_SESSION['userInfo']['Email'];
//echo $useremail;
$id = getuserId($useremail);
//print_r($id);
extract($id[0]);

$userid = $UserPK;
//echo $userid;
//echo $userid;

$accountList = getAccountList($userid);

//print_r($accountList);

$output = <<<HTML
       <section id="OrderForm">
   <fieldset class="noBG"> 
        <h2>My Account</h2>
        <h2 style="font-size:20px">Order History</h2>
      
   <table id="allOrders">
        
        <thead>
         <tr>
              <th>Order Number</th>
            <th>Order Date</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status</th>
           
        </tr>
        </thead>
HTML;









foreach ($accountList as $order) {
    // print_r($order);
    extract($order);
    $date = strlen($OrderDate);
    $date1 = substr($OrderDate, 0, 16);
    $currentT = date("Y-m-d H:i:s");
    //echo $currentT;
    //echo $date1;
    $currentTime = new DateTime($currentT);
    $orderTime = new DateTime($date1);
    //echo $currentT."   ";
    //$Currenthour = strtotime($currentT);
    //$Orderhour = strtotime($OrderDate);
    //$Orderhour1= date('H', $Orderhour);
    //$currenthour1= date('H', $Currenthour);
    //$currentMin= date('m', $Currenthour);
     $interval=$currentTime->diff($orderTime);
    $a=$interval->format('%h');
    //echo $currentMin;
    //$a = $currenthour1 - $Orderhour1;
//echo "difference :$a";
   // echo $a;


    if ($a > 24) {
        $show = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPLETE";
    } else {
        $show = <<<HTML
         <form action="orderDelete.php" method="post">
                <input type="hidden" name="OrderPK" value="$OrderPK" />
                <input type="submit" name="submit2" value="delete" />
            </form>
HTML;
    }




    $output .= <<<HTML

        <tr>
            <td >
                $OrderPK
            </td>
    
        
            <td >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$date1
            </td>
          <td style="text-align:right">
        
         
                 $show
        
    
  
            </td>
       
        
            </tr>
   
HTML;
}

$output .= <<<HTML
        
   <p style="font-size:15px">*You can cancel orders which are placed within 24 hours.</p>

</fieldset>
     </table></section>
HTML;

echo $output;

// call the displayPageFooter method in siteCommon.php

displayPageFooter();
?>
