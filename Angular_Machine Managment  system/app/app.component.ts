import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from './route/auth.service';
import { Router }      from '@angular/router';


@Component({
    selector: 'pm-app',
    template: `
   <img id="homePicture" src="app/assets/images/log.jpg" width="350" height="110" style="margin-left:0%;font-size:30px" >
<p id="li">Welcome to MV Lab Virtual Machine Inventory</p>

<div>Welcome to MV Lab Virtual Machine Inventory</div>


<div style="margin-top:-30px;">
        <nav class='navbar navbar-default' >
            <div class='container-fluid'>
                
                <ul class='nav navbar-nav' id="list1">
                    <li *ngIf="!authService.isLoggedIn" (click)="fiterR()" ><a [routerLink]="['/login']" id="link1">LogIn</a></li>
                    <li *ngIf="authService.isLoggedIn"><a id="link1" (click)="logout()">LogOut</a></li>
                      
                    <li><a [routerLink]="['/filter']" id="link2" (click)="fiterR()">List All Machines</a></li>
                     <li><a [routerLink]="['/addUpdate']" id="link2" (click)="addR()">Add Machine</a></li>
                       <li><a [routerLink]="['/update']" id="link2" (click)="update()">Update Machine</a></li>
                   
                </ul>
            </div>
        </nav>
           </div>
      

        <div class='container' id="routerContent">
            <router-outlet></router-outlet>
        </div>
     `,
     styleUrls: ['app/app.component.css'],
     
    directives: [ROUTER_DIRECTIVES],
    providers: [
                HTTP_PROVIDERS,
                
               ]
})

export class AppComponent {
 
userName:string



 constructor(public authService: AuthService, public router: Router) {
    //  short hands for constructor, for every constructor , it create property authService, so we can
    //use this property in template
}



logout(){

    this.authService.logout();
    this.router.navigate(['/welcome']);
    this.authService.addrouter=false;
    this.authService.firouter=false;
    this.authService.updateM=false;
}//logout

addR(){

    this.authService.addrouter=true;
    this.authService.firouter=false;
     this.authService.updateM=false;
        if (this.authService.isLoggedIn) {
             
                  if (this.authService.addrouter &&  !this.authService.admin){  alert("You are not administrtaor.You can not have access to add and upadate machine page");}
                                                    
                  }

}//addR()


update(){

    this.authService.updateM=true;
    this.authService.addrouter=false;
    this.authService.firouter=false;
        if (this.authService.isLoggedIn) {
             
                  if (this.authService.updateM &&  !this.authService.admin){  alert("You are not administrtaor.You can not have access to add and upadate machine page");}
                                                    
                  }

}//update()


fiterR()
{
    this.authService.firouter=true;
    
}//fiterR



}

