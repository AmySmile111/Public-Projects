import { Injectable } from '@angular/core';
import { MachinesService } from '../machine/machine.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  Username:string
  addrouter=false;
  firouter:boolean=false;
  admin=false;
  updateM=false;



 constructor(private _MachinesService: MachinesService) { }

 checkAdmin(name:string){

this.admin=this. _MachinesService.checkAdmin2(name);

}//checkAdmin


  login(name:string,password:string) {
  
     if(this. _MachinesService.checkLogin(name,password)) 
{
    this.Username=name;
    
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  
}
     
    else 
    {return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);}
  


}//Its login method simulates an API call to an external service by returning an observable that resolves successfully after a short pause.
  //we can check wheter or not login name and password are matched. using post method to connect to server


continue()
{
  return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true)
}

  logout() {
    this.isLoggedIn = false;
  }
}