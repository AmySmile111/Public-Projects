import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptionsArgs, Headers } from '@angular/http';
import {Machine} from './Machine'
import {datas} from './mockData'
import { Router }      from '@angular/router';
import { AuthService } from '../route/auth.service';

const Url_machine='api/machine.json';

//const Url_machine='app/machine/machines';
@Injectable()
export class MachinesService {
 
get1:Machine;
i:number




constructor(private _http: Http, public _data:datas,public router: Router) { 
      
     var header : Headers = new Headers();
     header.append('Content-Type', 'application/json')
    
} // end constructor 


getMachines(){
  
      return this._data.machines;
  
}

getLastMachines(){
  
      var a=(this._data.machines).length-1;
      return this._data.machines[a]
}

deleteLast(){


      this._data.machines.pop()


}

getMachines1():Observable<Machine[]> {
    //return this._http.get('http://den-vm-bwlz01:9191/u2wde/rbosvcs/MVLAB/MachineQuery')
    return this._http.get(Url_machine)
    .map((response: Response) => <Machine[]>response.json().result_set)//result_set is array name
     
      .do(data => console.log(data))
      .catch(this.handleError);
}//if there is link of server, use getMachines1



updateArray1(machine:Machine) {

 var header : Headers = new Headers();
     header.append('Content-Type', 'application/json')
 var url = `${Url_machine}/result_set/${machine.MACHINE_NAME}`;

 return this._http
               .put(url, JSON.stringify(machine), {headers: header})
               .map(res => res.json());
              

}//if there is a link of server, use updateArray1

updateArray(a:Machine){

  this.get1= this._data.machines.find(li=>li.ID===a.ID);
  this.i=this._data.machines.indexOf( this.get1)
  this._data.machines[this.i]=a;

}





updateWait(a:Machine){

  this.get1= this._data.machines.find(li=>li.ID===a.ID);
  this.i=this._data.machines.indexOf( this.get1)
  this._data.machines[this.i]=a;

}





checkLogin(name:string,password:string){

 if(this._data.users.find(a=>a.name==name&&a.password==password)){
   return true
 }
 else{return false}
}


addRecord(a:Machine){

this._data.machines.push(a);
  
}


checkMachineName(name:string){
  if(this._data.machines.find(a=>a.MACHINE_NAME==name)){
   return true
 }
  else{return false}

}



findMachineName(name:string){
  
  return this._data.machines.find(a=>a.MACHINE_NAME==name)
  

}




checkAdmin2(name:string){

if(this._data.users.find(a=>a.name==name && a.permission=="admin")){
        return true
 }
 else{return false}

}


private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }














}