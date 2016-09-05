import { Component,OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../route/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MachinesService } from '../machine/machine.service';
import {Machine} from '../machine/Machine'





@Component({
 templateUrl: 'app/addUpdate/addUpdate.html',
 styleUrls: ['app/addUpdate/addUpdate.css'],
 directives: [ROUTER_DIRECTIVES]
})




export class addUpdateComponent implements OnInit {
record:Machine; 
list:Machine[]=[]; 
newArr1:Machine[]=[];
newArr2:Machine[]=[];
newArr3:Machine[]=[];
newArr4:Machine[]=[];
newArr5:Machine[]=[];
newArr6:Machine[]=[];
listAll:Machine[]=[]; 




 constructor(private _MachinesService: MachinesService,public authService: AuthService,public router: Router) { 
      
    
  }

ngOnInit(){
         
   this.getArray();
  
        }


getArray(){

  this.listAll=this._MachinesService.getMachines()
  this.getMachines2(this.listAll);

}
 
 
 getMachines2( machines: Machine[]){
         this.list = machines;
         if (this.list[0]!=null)
         {    
               this.removeOS();
               this.removePlatform();
               this.removeType();
               this.removeProject();
               this.removeTeam();
               this.removeRestrict();

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
            if (this.list[x].DOMAIN === this.newArr1[y].DOMAIN) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr1.push(this.list[x]);
        }
    }
       
     }



     removePlatform(){
        
        var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr2[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr2.length; y++) {
            if (this.list[x].OS_MAIN === this.newArr2[y].OS_MAIN) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr2.push(this.list[x]);
        }
    }
  
     }


     removeType(){
        
        var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr3[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr3.length; y++) {
            if (this.list[x].MACHINE_TYPE === this.newArr3[y].MACHINE_TYPE) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr3.push(this.list[x]);
        }
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


removeTeam(){
        
        var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr5[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr5.length; y++) {
            if (this.list[x].TEAM === this.newArr5[y].TEAM) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr5.push(this.list[x]);
        }
    }
  
     }


     removeRestrict(){
        
        var found : boolean;
        var x : number;
        var y : number;
        
    this.newArr6[0]= this.list[0];
        for (x = 0; x < this.list.length; x++) {
        found = false;
        for (y = 0; y < this.newArr6.length; y++) {
            if (this.list[x].RESERVED_TO === this.newArr6[y].RESERVED_TO) {
                found = true;
                break;
            }
        }
        if (!found) {
            this.newArr6.push(this.list[x]);
        }
    }
  
     }


onSubmit(name:string,ip:string,Version:string,Reserved:string,wait:string,Owner:string,
Date:Date,domain:string,platform:string,type:string,project:string,
team:string,restricted:string,load:string,Note:string)
{
      //check name    
if(this. _MachinesService.checkMachineName(name)==false){
      var date1=Date.toString().substring(5,7)+"/"+Date.toString().substring(8)+"/"+Date.toString().substring(0,4);

       //var date:string=Date.getMonth().toString()+"/"+Date.getDate().toString()+"/"+Date.getFullYear().toString();
       this.record=( {"DATE_RESERVED":date1, "SOFTWARE_LOADED":load,"OWNER":Owner,"SOFTWARE_VERSION":wait,
           "ID":name,"OS_MAIN":platform,  "OS_VERSION":Version, "MACHINE_NAME":name,"MACHINE_TYPE":type, "DOMAIN":domain,
           "CURRENT_PROJECT":project, "TEAM":team, "NOTES":Note, "RESERVED_TO":Reserved,"RESTRICTION":restricted, "IP_ADDRESS": ip});

       this._MachinesService.addRecord(this.record);
       this.router.navigate(['/confirm']);
   }



else{      alert("The maichine name is aleady existed, please input a new one")      
           document.getElementById("Mname").focus();
 }

}




}//end class