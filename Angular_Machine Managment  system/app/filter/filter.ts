import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MachinesService } from '../machine/machine.service';
import {Machine} from '../machine/Machine'
import { AuthService } from '../route/auth.service';





@Component({
 templateUrl: 'app/filter/filter.html',
 styleUrls: ['app/filter/filter.css'],
 directives: [ROUTER_DIRECTIVES]
})

export class FilterComponent implements OnInit{

list:Machine[]=[]; 
listAll:Machine[]=[]; 
test:string;
newArr1:Machine[]=[];
newArr2:Machine[]=[];
newArr3:Machine[]=[];
newArr4:Machine[]=[];
newArr5:Machine[]=[];
newArr6:Machine[]=[];
result:Array<Machine>
os:string="aa"
show=false
show1=true
version:string="aa"
reservedTo:string="aa"
project:string="aa"
type:string="aa"
restriction:string="aa"
errorMessage: string;
Machine: Machine[];
selectedVehicle: Machine;  
submitted1 = false
submitted2 = false
userName:string;
old:string;
postReserve:Machine
deleteSign=true










 constructor(private _MachinesService: MachinesService,public authService: AuthService) { 
         
   this.userName=this.authService.Username
    
  }


 
     

ngOnInit(){
  
  this.getArray();
  this.deleteSign=true;
      
}

getArray(){

this.listAll=this._MachinesService.getMachines()
this.getMachines2(this.listAll);

}


getArray1(){
         
       this._MachinesService.getMachines1()
      .subscribe(
           machines => this.getMachines2(machines),
           error =>  this.errorMessage = <any>error
       );

}////if there is link of server, use getMachines1




sendPost(re:Machine){

this._MachinesService.updateArray(re)

}



getMachines2( machines: Machine[]){
         this.list = machines;
         if (this.list[0]!=null)
         {    
              this.removeOS();
              this.removeVersion();
              this.removeReserved();
              this.removeProject();
              this.removeType();
              this.removeRestriction();
            
        }
           
    }


      
removeOS(){
        
        var found : boolean;
        var x : number;
        var y : number;
        
       this.newArr1[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr1.length; y++) {
            if (this.list[x].OS_MAIN === this.newArr1[y].OS_MAIN) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr1.push(this.list[x]);
        }
    }
       
   
}



removeVersion(){
    
    var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr2[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr2.length; y++) {
            if (this.list[x].OS_VERSION === this.newArr2[y].OS_VERSION) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr2.push(this.list[x]);
        }
    }
          
}




removeReserved(){
        var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr3[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr3.length; y++) {
            if (this.list[x].RESERVED_TO === this.newArr3[y].RESERVED_TO) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr3.push(this.list[x]);
        }
    }
       
    for(y = 0; y < this.newArr3.length; y++)
    {
        if(this.newArr3[y].RESERVED_TO==""){this.newArr3[y].RESERVED_TO="Available"}
        
        
    }
    
    
}


removeProject(){
    
    var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr4[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr4.length; y++) {
            if (this.list[x].CURRENT_PROJECT === this.newArr4[y].CURRENT_PROJECT) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr4.push(this.list[x]);
        }
    }
    
    
}


removeType(){
     var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr5[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr5.length; y++) {
            if (this.list[x].MACHINE_TYPE === this.newArr5[y].MACHINE_TYPE) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr5.push(this.list[x]);
        }
    }
    
}






removeRestriction(){
    var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr6[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr6.length; y++) {
            if (this.list[x].RESTRICTION === this.newArr6[y].RESTRICTION) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr6.push(this.list[x]);
        }
    }
}




onSelect(value:string) { 
    
 this.os = value; 
 this.result = this.list.filter(li=>li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os) && li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) &&li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project) && li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) );
 this.show=true;
 this.show1=false;
 

}


onSelect2(value:string) { 
   
 this.version = value; 
 this.result = this.list.filter(li=>li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os) && li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) && li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project) && li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) );
 this.show=true;
 this.show1=false;

}


onSelect3(value:string) { 
   
 this.reservedTo = value; 
 this.result = this.list.filter(li=>li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) && li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os) &&li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project) && li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) );
 this.show=true;
 this.show1=false;

}

 
 
 
 onSelect4(value:string) { 
   
 this.project = value; 
 this.result = this.list.filter(li=>li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project)&& li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) && li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os) && li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) );
 this.show=true;
 this.show1=false;

}

 
 
 onSelect5(value:string) { 
   
 this.type = value; 
 
 this.result = this.list.filter(li=>li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project)&& li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) && li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os) && li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) );
 this.show=true;
 this.show1=false;

}
 
 
 onSelect6(value:string) { 
   
 this.restriction = value; 
 
 this.result = this.list.filter(li=>li.RESTRICTION===(this.restriction=="aa" ? li.RESTRICTION : this.restriction) && li.MACHINE_TYPE===(this.type=="aa" ? li.MACHINE_TYPE : this.type) && li.CURRENT_PROJECT ===(this.project=="aa" ? li.CURRENT_PROJECT : this.project)&& li.RESERVED_TO===(this.reservedTo=="aa" ? li.RESERVED_TO : this.reservedTo) && li.OS_VERSION===(this.version=="aa" ? li.OS_VERSION : this.version) && li.OS_MAIN===(this.os=="aa" ? li.OS_MAIN : this.os));
 this.show=true;
 this.show1=false;

}
 
 
 
reserve(reserved:Machine,list:Machine[]){


   if(reserved.RESERVED_TO=="Available")

     {

    list[list.indexOf(reserved)].RESERVED_TO=this.userName;
      list[list.indexOf(reserved)].DATE_RESERVED=+(new Date().getMonth()+1).toString()+"/"+new Date().getDate().toString()+"/"+new Date().getFullYear().toString();
    
    
     
     }
   else if (reserved.RESERVED_TO!="Available" && reserved.RESERVED_TO==this.userName)

     {
          
          if(reserved.SOFTWARE_VERSION =="")//waiting list is null
          var r = confirm("Are you sure to cancel this machine?")
          if (r == true){
             {list[list.indexOf(reserved)].RESERVED_TO="Available"
            list[list.indexOf(reserved)].DATE_RESERVED="";}
             
              }
           if (r == false){}
          
           else if(reserved.SOFTWARE_VERSION !=""){

                         if(reserved.SOFTWARE_VERSION.search(",")==-1)
                         {
                             var r = confirm("Are you sure to cancel this machine?")
                              if (r == true){
                               list[list.indexOf(reserved)].RESERVED_TO=reserved.SOFTWARE_VERSION
                               list[list.indexOf(reserved)].SOFTWARE_VERSION="";
                               list[list.indexOf(reserved)].DATE_RESERVED=+(new Date().getMonth()+1).toString()+"/"+new Date().getDate().toString()+"/"+new Date().getFullYear().toString();
                               }if (r == false){}
                         
                        }

                         else{
                             var r = confirm("Are you sure to cancel this machine?")
                              if (r == true){
                              var a =reserved.SOFTWARE_VERSION.search(",");
                              var b=reserved.SOFTWARE_VERSION.slice(0,a)
                              var d=reserved.SOFTWARE_VERSION.length
                              list[list.indexOf(reserved)].SOFTWARE_VERSION=reserved.SOFTWARE_VERSION.slice(a+1,d)
                              list[list.indexOf(reserved)].RESERVED_TO=b
                              list[list.indexOf(reserved)].DATE_RESERVED=+(new Date().getMonth()+1).toString()+"/"+new Date().getDate().toString()+"/"+new Date().getFullYear().toString();
                                 }
                              if (r == false){}

                           }                 

          }
              
     }


             this.postReserve=list[list.indexOf(reserved)];
             this.sendPost(this.postReserve);
 }


 
reserve2(reserved:Machine,list:Machine[]){

  var start:number;
  var length:number;
  var a:string;
  var b:string;
if(reserved.SOFTWARE_VERSION=="")
{list[list.indexOf(reserved)].SOFTWARE_VERSION=this.userName;
     this.deleteSign=false
}

else{

     if(list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(',')==-1 && list[list.indexOf(reserved)].SOFTWARE_VERSION==this.userName){
          
           var r = confirm("Are you sure to delete your name on waiting list?")
           if (r == true){
           list[list.indexOf(reserved)].SOFTWARE_VERSION="";//have only one name for herself
                this.deleteSign=true;
            }
            }


     else if(list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(this.userName)==-1){
                 list[list.indexOf(reserved)].SOFTWARE_VERSION += "," +this.userName;
                  this.deleteSign=false
        }

     else{
             
              var r = confirm("Are you sure to delete your name on waiting list?")
              if (r == true){
                 start=list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(this.userName);
                 length=this.userName.length
                 if(list[list.indexOf(reserved)].SOFTWARE_VERSION[start-1]==","){
                 a= list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(0,start-1)+list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(start+length)
                 list[list.indexOf(reserved)].SOFTWARE_VERSION=a
                     }
             else{
                     a= list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(start+length+1)
                     list[list.indexOf(reserved)].SOFTWARE_VERSION=a
                  }
                   this.deleteSign=true;
            }//if (r == true)

    }
}

this._MachinesService.updateWait(list[list.indexOf(reserved)]);
   


}





}