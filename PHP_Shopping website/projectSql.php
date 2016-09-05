<?php
/*
    Purpose: Demo 8 - Securing Applications
    Author: LV
    Date: October 2015
    Uses: dbConnExec.php
 */

require_once 'dbConnect.php';

 function getProductList($ProductName)
        {
            $query = "Select *
                    From product
                    Where ProductName like '%$ProductName%'";

           return executeQuery($query);

        }
// checks whether a user with the provided credentials exists

function getCustomer($Email, $Password)
{
    $query = <<<STR
Select *
From Customer
Where Email = '$Email'
and Password = '$Password'
STR;

return executeQuery($query);

}

// checks whether a username alreadys exists

function findDuplicateCustomer($Email)
{
    $query = <<<STR
Select Email
From Customer
Where Email = '$Email'
STR;

return executeQuery($query);
}

// inserts a new row in the contacts table

function addCustomer($Email, $Password, $FirstName, $LastName)
{
    $query = <<<STR
Insert Into customer(Email, Password, FirstName, LastName)
Values('$Email', '$Password', '$FirstName', '$LastName')
STR;

    executeQuery($query);
}

function getProductsByName($ProductName)
{
    $query = <<<STR
 Select *
From Product
Where ProductName like '%$ProductName%'
STR;

    return executeQuery($query);
}


function getProductByID ($productPK)
{
    
     $query = <<<ABC
Select *
From Product,Category,CateItem
Where Product.ProductPK = $productPK  and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}


function getProdyctInCart($productIDs)
{
    $query = <<<STR
Select *
From Product
Where ProductPK in ($productIDs)
STR;

    return executeQuery($query);
}


function addSizeToOrder($size,$productPK){
     $query = <<<STR
INSERT INTO OrderItem (OrderSize,ProductFK) VALUES ("$size",$productPK);

STR;

    return executeQuery($query);
    

                }


function getProductByID2($id)
{
    $query = <<<STR
Select *
From Product
Where ProductPK =$id
STR;
    return executeQuery($query);
}


function addProductOrder($UserPK, $CardName,$CardNum, $Phone,$shipName,
             $ShipStreet,$ShipCity,$ShipState,$ShipZip,$CardNum,$CardName,$ExpirDate,$CVN,
              $BillStreet,$BillCity,$BillState,$BillZip,$DeliveryMethod,$date)
{
    
    
    $query = <<<STR
INSERT INTO ProductOrder(UserFK,CardNum,CardName,ExpirDate,CVN,Phone,BillStreet,BillCity,BillState,BillZip,ShipStreet,ShipCity,ShipState,ShipZip,DeliveryMethod,ShipName,OrderDate)
VALUES ('$UserPK','$CardNum','$CardName','$ExpirDate','$CVN','$Phone','$BillStreet','$BillCity','$BillState','$BillZip','$ShipStreet','$ShipCity','$ShipState','$ShipZip','$DeliveryMethod','$shipName','$date');

STR;
    
    executeQuery($query);
    
    
    
    
    
    
}

function addProductOrder2($CustomerPK)
{
    
    $query = <<<STR
INSERT INTO ProductOrder(UserFK) values('1');

STR;
    executeQuery($query);
    
}

//SELECT UserPK from Customer WHERE UserPK=$CustomerPK;


function getuserId($eamil){
    $query = <<<STR
Select UserPK
From Customer
Where email ='$eamil';
STR;
    return executeQuery($query);
    
}

function getOrderID(){
    $query = <<<STR
Select max(OrderPK)
From ProductOrder

STR;
    return executeQuery($query);
    
}


function getOrderList($oderID)
{
    $query = <<<STR
Select *
From ProductOrder
Where OrderPK=$oderID

STR;
    return executeQuery($query);
    
    
    
}

function getProductsByType ($Type)
{
    
     $query = <<<ABC
Select ProductPK, ProductName, Price, ImgName
From Product
Where Type = '$Type' 
ABC;
    
    return executeQuery($query);
 
}

function getProductsByTypeSize ($Type,$Size)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Size = '$Size'and Product.Type='$Type'  and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function getProductsBySize ($Size)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Size = '$Size' and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function getProductsByTypeColor ($Type,$Color)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Color = '$Color' and Product.Type='$Type' and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function getProductsByColor ($Color)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Color = '$Color'  and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function getProductsByTypeSizeColor ($Type,$Size, $Color)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Color = '$Color'  and Product.Type='$Type' and CateItem.Size='$Size' and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function getProductsBySizeColor ($Size, $Color)
{
    
     $query = <<<ABC
Select ProductPK, ProductName,Price, ImgName
From Product,Category,CateItem
Where CateItem.Color = '$Color' and CateItem.Size='$Size' and ProductPK=ProductFK and CategoryItemFK=CategoryItemPK
ABC;
    
    return executeQuery($query);
 
}
function addOrderItem($a,$productID,$qty,$size)
     {
    
    
     $query = <<<STR
INSERT INTO OrderItem(OrderFK,ProductFK,OrderQty,OrderSize) values($a,$productID,$qty,'$size');

STR;
    executeQuery($query);
    
    
    
    
     }
     
  function deleteOrder($OrderPK){
      
     $query = <<<STR

   delete 
From OrderItem
where OrderFK=$OrderPK;
             
   
   delete 
From ProductOrder
Where  OrderPK=$OrderPK ;
            
STR;
      
       executeQuery($query);

      
  }
     
  function getAccountList($userpk)
  {
      
      $query = <<<STR
Select *
From ProductOrder
Where UserFK=$userpk

STR;
    return executeQuery($query);
    
      
      
      
  }
?>
