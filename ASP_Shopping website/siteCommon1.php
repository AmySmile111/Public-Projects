<?php
   /* 
    Purpose: Methods to render Common Site Header and Footer
    Author: LV
    Date: September 2015
     */







function displayPageHeader($pageTitle)
{
   $output = <<<ABC
<!DOCTYPE html>
<html>

<head>
  
    <meta charset="UTF-8" />
    <meta name="author" content="Xin Tian" />
    <meta name="description" content="A site for shopping clothes" />
    <meta name="keywords" content="rainbow, clothes" />
    <title>Rainbow $pageTitle</title>
    <link href="commonStyle.css" rel="stylesheet" type="text/css" />
     <link href="commonStyle1.css" rel="stylesheet" type="text/css" />
</head>

<body>
<nav>
  
            <a style="font-size:45px" id="homeTitleIn" href="home.php">RAINBOW</a>
            <a style="font-size:15px" id="rightTitle1" href="login.php">Sign in</a>
            <a style="font-size:15px" id="rightTitle2" href="about.html">About</a>
           <a style="font-size:15px" id="bag" href="shoppingCart.php">ShoppingCart</a>
       
    </nav>

 
ABC;
   echo $output;
}

function displayPageHeaderLog($FirstName)
{
   $output = <<<ABC
<!DOCTYPE html>
<html>

<head>
  
    <meta charset="UTF-8" />
    <meta name="author" content="Xin Tian" />
    <meta name="description" content="A site for shopping clothes" />
    <meta name="keywords" content="rainbow, clothes" />
    <title>Rainbow </title>
    <link href="commonStyle.css" rel="stylesheet" type="text/css" />
     <link href="commonStyle1.css" rel="stylesheet" type="text/css" />
</head>

<body>
<nav>
     
          
            <a style="font-size:45px" id="homeTitleInLog" href="home.php">RAINBOW</a>
          <a style="font-size:15px" href="orderHistory.php" id="rightTitle3Log">$FirstName's Account&nbsp;&nbsp;&nbsp;&nbsp;</a>
             <a style="font-size:15px" href="logOut.php" id="rightTitle1Log">LogOut</a>
             <a style="font-size:15px" id="rightTitle2Log" href="about.html">About</a>
             <a style="font-size:15px" id="bagLog" href="shoppingCart.php">ShoppingCart</a>
       
  
    </nav>

 
ABC;
   echo $output;
}






   function displayPageNav1()
{
 
      
$ProductName= $_SESSION['productInfo']['ProductName'];
  
   $output = <<<ABC
 <aside>
        <div id="emptyMenu">
           
               

        </div>
           <img id="asideImg" src="images/flower.jpg" alt="flower" height="160" width="160"/>
    </aside>
   

ABC;
   echo $output;
}

function displayPageNav()
{
 
      
$ProductName= $_SESSION['productInfo']['ProductName'];
    
   $output = <<<ABC
 <aside>
        <ul id="menu">
            <li class="list">
                <span>SHOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </span>
                <ul id="cloth">
                    <li><a class="hplink" href="multipleSearch.php?type=Tshirt">- T-Shirts</a></li>
                    <li><a class="hplink" href="multipleSearch.php?type=Shirt">- Shirts</a></li>
                    <li><a class="hplink" href="multipleSearch.php?type=Sweater">- Sweaters</a></li>
                    <li><a class="hplink" href="multipleSearch.php?type=Dress">- Dresses</a></li>
                    <li><a class="hplink" href="multipleSearch.php?type=Jean">- Jeans</a></li>
                </ul>
            </li>
            <li class="list">
                <span>FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </span>
                <ul id="si">
                    
                    <form name ="selectForm" id="selectForm" action="multipleSearch.php" method="post">
                    <li id="size1">- Size</li>
                    <input type="checkbox" name="Size[]" class="checkbox" value="XS"/><li class="size">&nbsp; XS &nbsp;</li><br />
                    <input type="checkbox" name="Size[]" class="checkbox" value="S"/><li class="size">&nbsp;&nbsp;S&nbsp;</li><br />
                    <input type="checkbox" name="Size[]" class="checkbox" value="M"/><li class="size">&nbsp;&nbsp;M&nbsp;</li><br />
                    <input type="checkbox" name="Size[]" class="checkbox" value="L"/><li class="size">&nbsp;&nbsp;L&nbsp;</li><br />
   
                    <li id="color">- Color</li>
           
                    <input type="checkbox" name="Color[]" class="checkbox" value="Pink"/><li class="color" style="background-color:#ff99cc;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                    <input type="checkbox" name="Color[]" class="checkbox" value="White"/><li class="color" style="background-color:#FFFFFF;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                    <input type="checkbox" name="Color[]" class="checkbox" value="Black"/><li class="color" style="background-color:#000000;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                    <input type="checkbox" name="Color[]" class="checkbox" value="Blue"/><li class="color" style="background-color:#66b3ff;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                    <input type="checkbox" name="Color[]" class="checkbox" value="Purple"/><li class="color" style="background-color:#bf80ff;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                    <input type="checkbox" name="Color[]" class="checkbox" value="Red"/><li class="color" style="background-color:#ff4d4d;">&nbsp;&nbsp;&nbsp;&nbsp;</li><br />
                 
   <input type="submit" value="Filter" name="FILTER" /> 
            </form>
                </ul>
            </li>
            <li class="list">
                <form action="search.php" method = "post"  name="SearchByName" id="SearchByName">
                     <span>SEARCH </span>
                     <input type="text" name="ProductName" id ="ProductName" 
                         maxlength="50" value="$ProductName" placeholder="Search..." />
             
                     <input  type="submit" value="Search" name="Search" ;  />
                </form>
            </li>

        </ul>
           <img id="asideImg" src="images/flower.jpg" alt="flower" height="160" width="160"/>
    </aside>
    <script type="text/javascript">
        window.onload = function () {
            document.getElementById("cloth").style.display = "block";
            document.getElementById("si").style.display = "block";
           
        }
        
   
            var oMenu = document.getElementById('menu');
            var aLi = oMenu.getElementsByTagName('li');
            var aUl = oMenu.getElementsByTagName('ul');


            for (var i = 0; i < aLi.length; i++) {
                if (aLi[i].className == "list") {
                    aLi[i].onclick = function () {
                        var oUl = this.getElementsByTagName('ul')[0];
                        
                        if (oUl.style.display == "block") {
                            oUl.style.display = "block";
                        } else {
                            oUl.style.display = "block";
                        }

                    }
                }
            }
           
   
    </script>

ABC;
   echo $output;
}

function displayPageFooter()
{
 
   $output = <<<ABC
  
    <footer>
        <address>
            Developed by Yinglan Zhang and Xin Tian
        </address>
    </footer>

</body>

ABC;
   echo $output;
}
?>