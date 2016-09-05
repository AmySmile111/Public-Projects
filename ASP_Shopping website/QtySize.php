<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class QtySize

{
    public $OrderQty;
    public $OrderSize;
    public $ProductPK;
    public function __construct($Qty,$Size,$ProductPK)
            {
        
         $this->OrderQty =$Qty;
          $this->OrderSize =$Size;
           $this->ProductPK =$ProductPK;
        
            }
    
    public function getOrderQty(){
        
        return $this->OrderQty;
    }
    public function getOrderSize(){
        
        return $this->OrderSize;
    }   
    
     public function getProductPK(){
        
        return $this->ProductPK;
    }  
    public function getOrderPK(){
        
        return $this->ProductPK.$this->OrderSize;
    }   
    
      public function setOrderQty($a){
        
        return $this->OrderQty=$a;
    }
    
    
    
}