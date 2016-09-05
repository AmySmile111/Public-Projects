import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MachinesService } from '../machine/machine.service';
import {Machine} from '../machine/Machine'
import { Router }      from '@angular/router';


@Component({
  template: `
  <h2>This is the machine that you just added:</h2>
  <br>
  <table class="table table-striped" border="1" style="width:100%;text-align:center" [hidden]="show">
  <tr >  
    <th style="width:11% ; text-align:center">Machine Name</th>
    <th style="width:11%;text-align:center">IP</th> 
    <th style="width:11%;text-align:center">OS</th> 
    <th style="width:11%;text-align:center">OS Version</th>
    <th style="width:11%;text-align:center">Reserved To</th>
    <th style="width:11%;text-align:center">Reserved Date</th>
    <th style="width:11%;text-align:center">Current Project</th>
    <th style="width:11%;text-align:center">Machine Type</th> 
    <th style="width:11%;text-align:center">Wait List</th>
    <th style="width:15%;text-align:center">Restriction</th>
    <th style="width:15%;text-align:center">Software Loaded</th>
    <th style="width:15%;text-align:center">Owner</th>
    <th style="width:15%;text-align:center">Domain</th>
    <th style="width:15%;text-align:center">Team</th>
    <th style="width:15%;text-align:center">Notes</th>
 
 </tr>



 <tr >
    <td>{{li.MACHINE_NAME}}</td>
    <td>{{li.IP_ADDRESS}}</td>
    <td>{{li.OS_MAIN}}</td> 
    <td>{{li.OS_VERSION}}</td>
    <td>{{li.RESERVED_TO}}</td>
    <td>{{li.DATE_RESERVED}}</td>
    <td>{{li.CURRENT_PROJECT}}</td>
    <td>{{li.MACHINE_TYPE}}</td>
    <td > {{li.SOFTWARE_VERSION}}</td>
    <td>{{li.RESTRICTION}}</td>
    <td>{{li.SOFTWARE_LOADED}}</td>
    <td>{{li.OWNER}}</td>
    <td>{{li.DOMAIN}}</td>
    <td>{{li.TEAM}}</td>
    <td>{{li.NOTES}}</td>
  </tr>
 
    

    
</table>


<table class="table table-striped" border="1" style="width:100%;text-align:center" [hidden]="!show">
  <tr>  
    <th style="width:11% ; text-align:center">Machine Name</th>
    <th style="width:11%;text-align:center">IP</th> 
    <th style="width:11%;text-align:center">OS</th> 
    <th style="width:11%;text-align:center">OS Version</th>
    <th style="width:11%;text-align:center">Reserved To</th>
    <th style="width:11%;text-align:center">Reserved Date</th>
    <th style="width:11%;text-align:center">Current Project</th>
 
 </tr>
  <tr>
    <td><input [(ngModel)]="li.MACHINE_NAME"></td>
    <td><input [(ngModel)]="li.IP_ADDRESS"></td>
    <td><input [(ngModel)]="li.OS_MAIN"></td>
    <td><input [(ngModel)]="li.OS_VERSION"></td>
    <td><input [(ngModel)]="li.RESERVED_TO"></td>
    <td><input [(ngModel)]="li.DATE_RESERVED"></td>
    <td><input [(ngModel)]="li.CURRENT_PROJECT"></td>
  </tr>

 <tr>  
   <th style="width:11%;text-align:center">Machine Type</th> 
   <th style="width:11%;text-align:center">Wait List</th>
   <th style="width:15%;text-align:center">Restriction</th>
   <th style="width:15%;text-align:center">Software Loaded</th>
   <th style="width:15%;text-align:center">Owner</th>
   <th style="width:15%;text-align:center">Domain</th>
   <th style="width:15%;text-align:center">Team</th>
</tr>


<tr>
   
  <td><input [(ngModel)]="li.MACHINE_TYPE"></td>
  <td><input [(ngModel)]="li.SOFTWARE_VERSION"></td>
  <td><input [(ngModel)]="li.RESTRICTION"></td>
  <td><input [(ngModel)]="li.SOFTWARE_LOADED"></td>
  <td><input [(ngModel)]="li.OWNER"></td>
  <td><input [(ngModel)]="li.DOMAIN"></td>
  <td><input [(ngModel)]="li.TEAM"></td>
</tr>

<tr><th style="width:15%;text-align:center">Note</th></tr>
<tr><td><input [(ngModel)]="li.NOTES"></td></tr>

    
</table>


<button (click)="cancel()" id="cancel" [hidden]="show">Cancle</button>
<button (click)="save()" id="save" [hidden]="show">Confirm</button>
<button (click)="update()" id="up" [hidden]="show">Update</button>
<button (click)="save1()" id="cancel1" [hidden]="!show">save</button>
<button (click)="back()" id="save" [hidden]="!show">cancel</button>


`,
styles: [` 
#cancel{
     margin-left:30%;
 }

#save{
     margin-left:10%;
 }

#up{
     margin-left:10%;
 }
 #cancel1{
     margin-left:40%;
 }


  `],
  directives: [ROUTER_DIRECTIVES]
})
export class ConfirmComponent  implements OnInit{
li:Machine;
show=false;

constructor(private _MachinesService: MachinesService, public router: Router) { 
      
    
  }
//edit and ngmodel

ngOnInit(){

this.li=this._MachinesService.getLastMachines();


}

cancel(){


this._MachinesService.deleteLast();
this.router.navigate(['/addUpdate']);


}

save(){

this.router.navigate(['/addUpdate']);


}

update()
{
this.show=true;


}

save1()
{
 this._MachinesService.updateArray(this.li);
 this.router.navigate(['/addUpdate']);


}

back(){
  this.show=false
this.router.navigate(['/confirm']);
}
}