<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once ("projectSql.php");
 $orderID=getOrderID();
   //print_r ($orderID[0]);
  
 
  //echo $orderID[0][''];
  
     $_SESSION['IDO'] = $orderID[0][''];
     $oderID= $_SESSION['IDO'];
   //print_r($_SESSION['IDO']) ;
   echo $_SESSION['IDO'];