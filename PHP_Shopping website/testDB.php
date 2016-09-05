<!DOCTYPE html>
<!--
    Author: Xin Tian
    Date: 02 22 2016
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        function dbConnect()
        {
            $serverName = 'buscissql\cisweb';
            $uName = 'drive';
            $pWord = 'data';
            $db = 'Team129DB';

            try
            {

                $conn = new PDO("sqlsrv:Server=$serverName; Database=$db", $uName, 
                        $pWord, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

                return $conn;
            }
            catch (PDOException $e)
            {
                die('Connection failed: ' . $e->getMessage());
            }
        }
        function executeQuery($query)
        {

            $conn = dbConnect();
            try
            {

                $stmt = $conn->query($query);

                do
                {
                    if ($stmt->columnCount() > 0)  
                    {
                        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);  
                    }
                } while ($stmt->nextRowset()); 
      
                dbDisconnect($conn);

                return $results;
            }
            catch (PDOException $e)
            {
               dbDisconnect($conn);
                die ('Query failed: ' . $e->getMessage());
            }
        }
       
        function dbDisconnect($conn)
        {
           $conn = null;
        }
        
        function getActorList()
        {
            $query = "Select *
                    From customer";

           return executeQuery($query);

        }
function addProduct($ProductName,$Description, $Price,$ImgName)
{
    $query = <<<STR
Insert Into product(ProductName, Description,Price,ImgName)
Values('$ProductName', '$Description','$Price','$ImgName')
STR;

    executeQuery($query);
}

addProduct("BFF Fairy Barback Tank","Our BFF Tank is fit for a free-spirited Fairy! Spread your wings in this boxy, boyish tank with crewneck and open armholes. Features a glitter ‘FAIRY’ graphic. In Chapstick Pink / Party Girl Pink. 
70% Cotton, 30% Polyester","68.00","BFFFairyBarbackTank");
 addProduct("Nah Debossed Junee Sweater","Is there anything better than Wildfox? Nah! A stylish spin on the classic sweater with a scalloped neckline and scalloped banded hems. Features a slightly cropped body. A subtle white heart graphic surrounds the Nah. In Pina Colada / Acid Wash. 
Vintage Cotton Rayon","122.00","NahDebossedJuneeSweater");
 addProduct("Monday Middie Tee","It’s Monday so cry, eat, sleep in our boxy, cropped crewneck tee. In Grapefruit Pink. Features a computer graphic in pink on the front of the top. 
100% Cotton","62.00","MondayMiddieTee");
 addProduct("Mermaid Rules Cuddles Hoodie","Breathe human air, walk on new legs, makeout with Prince, back to ocean. Our cozy, cuddles hoodie in a deliciously a soft sherpa fleece for that look and feel of your favorite sweatshirt. A roomy, oversized fit, banded hems, and front pouch pocket. 
In Ariel Red.","128.00","MermaidRulesCuddlesHoodie");
 addProduct("Essentials Malibu Zip Up","Wildfox girls love the simple things in life. That is why we are bringing you the Essentials Malibu Zip Up. This sweatshirt is plain and simple. Constructed from our deliciously soft vintage varsity fabric. An over-sized, roomy fit that hangs off the body perfectly. Hood. Zip-front. Pockets that you can stuff your hands into, Wildfox emblem embroidery along the hood. ","110.00","EssentialsMalibuZipUp");
 

$actorList = getActorList();
       
        echo '<section>';
        echo
        '<table>
          
              <colgroup>
                 <col class="firstcol" />
              </colgroup>
              <thead>
                 <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                 </tr>
              </thead>
              <tbody>';

              foreach ($actorList as $actor)
              {
              echo
                 '<tr>
                     <td>'  . $actor['UserPK']  . '</td>
                    <td>'  . $actor['FirstName']  . '</td>
                    <td>' .$actor['LastName'] . '</td>
                  
                 </tr>';
              
              }

        echo  '</tbody> </table> </section>';
        ?>
    </body>
</html>
