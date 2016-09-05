<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once ('QtySize.php');

class shopCart       //hold everything user add into cart
{
    
    
    //Properties

    private $cartItems;
  

    public function __construct()
    {
        $this->cartItems = array();  //we want cartItems hold multple objects that products user choose
      
    }
    
    
    
     public function addCartItem($ProductPK,$qty1,$size1)
    {
       
             
      $ProductPK1=$ProductPK.$size1;
         
         
          if (!array_key_exists($ProductPK1, $this->cartItems))
         
         
             {
                $QtySizeOrder=new QtySize($qty1,$size1,$ProductPK);
                 
              
                $this->cartItems[$ProductPK1] = $QtySizeOrder;
             }
             
             //elseif(!(in_array($QtySizeOrder->getOrderSize(), $this->cartItems))){   $ProductPK1=$ProductPK.($QtySizeOrder->getOrderSize());     $this->cartItems[$ProductPK1] = $QtySizeOrder;             }
                 
             
             
             else{
                     $ab= $this->cartItems[$ProductPK1]->OrderQty;
              
                $abc = $ab + $qty1;
                $QtySizeOrder=new QtySize($abc,$size1,$ProductPK);
                $this->cartItems[$ProductPK1] = $QtySizeOrder;
                
                
                
             }
             
             
             
             
        
    }

  
    
    
    public function getCartItems()
    {
        return $this->cartItems;
    }

    
    
    
     public function getQtyByProductID($ProductPK)
    {
        return $this->cartItems[$ProductPK];
    }
    
    
    
    
    public function updateCartItem($ProductPK, $Qty)
    {
        
        
        if ($Qty == 0)
        {
            $this->deleteCartItem($ProductPK);
        }
        else
        {
            $this->cartItems[$ProductPK]->OrderQty = $Qty;
        }
    }
    
    
    
    
    public function deleteCartItem($ProductPK)
    {
       echo $ProductPK;
       print_r($this->cartItems);
        unset($this->cartItems[$ProductPK]);
        print_r($this->cartItems);
    }
    
    
    
    
    
   
    
    
    
    
    
    
    
}//shopCart

