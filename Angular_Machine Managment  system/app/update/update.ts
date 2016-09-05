import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MachinesService } from '../machine/machine.service';
import {Machine} from '../machine/Machine'
import { Router }      from '@angular/router';

@Component({
 templateUrl: 'app/update/update.html',
styleUrls: ['app/update/update.css'],
 directives: [ROUTER_DIRECTIVES]
})


export class updateComponent implements OnInit {
listAll:Machine[]=[]; 
machine:Machine; 
record:Machine; 
show=false;
findMaichine:Machine
name:string
ip:string
main:string
version:string
reserve:string
date:string
project:string
type:string
Sversion:string
restriction:string
load:string
owner:string
domain:string
team:string
note:string




    
    
    
    constructor(private _MachinesService: MachinesService,public router: Router) { 
      
    
  }

ngOnInit(){
         
   this.getArray();
  
        }



getArray(){

    this.listAll=this._MachinesService.getMachines()
  
}



update(li:Machine)
{
this.machine=li;
this.name=this.machine.MACHINE_NAME;
this.ip=this.machine.IP_ADDRESS
this.main=this.machine.OS_MAIN
this.version=this.machine.OS_VERSION
this.reserve=this.machine.RESERVED_TO
this.date=this.machine.DATE_RESERVED
this.project=this.machine.CURRENT_PROJECT
this.type=this.machine.MACHINE_TYPE
this.Sversion=this.machine.SOFTWARE_VERSION
this.restriction=this.machine.RESTRICTION
this.load=this.machine.SOFTWARE_LOADED
this.owner=this.machine.OWNER
this.domain=this.machine.DOMAIN
this.team=this.machine.TEAM
this.note=this.machine.NOTES

this.show=true;


}


save()
{


    this.record=( {"DATE_RESERVED":this.date, "SOFTWARE_LOADED":this.load,"OWNER":this.owner,"SOFTWARE_VERSION":this.Sversion,
           "ID":this.name,"OS_MAIN":this.main,  "OS_VERSION":this.version, "MACHINE_NAME":this.name,"MACHINE_TYPE":this.type, "DOMAIN":this.domain,
           "CURRENT_PROJECT":this.project, "TEAM":this.team, "NOTES":this.note, "RESERVED_TO":this.reserve,"RESTRICTION":this.restriction, "IP_ADDRESS": this.ip});

 this._MachinesService.updateArray(this.record);
this.show=false;
 this.router.navigate(['/update']);


}

cancel(){
this.show=false;
 this.router.navigate(['/update']);

}




}