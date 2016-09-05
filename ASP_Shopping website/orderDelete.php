<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once ("projectSql.php");
$OrderPK=$_POST['OrderPK'];

$a=(int)$OrderPK;
echo $a;
deleteOrder($a);
header('Location:orderHistory.php');
exit;
?>
