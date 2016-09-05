
import { Component } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../route/auth.service';

@Component({
  template: `
   <div class="alert alert-danger" [hidden]="show">
    <strong>Your Login Name and Password are not matched!</strong> 
  </div>
  
  <div id="loginForm">
 <form #heroForm="ngForm" (ngSubmit)="onSubmit(username.value,password.value)" >
   
   <!-- Using #username, we can identify this input to get the value on the form's submit event -->
   <input type="text" #username  id="username" placeholder="Username" ngControl="name" required>
   <br><br>
  
   <!-- Using #password we can identify this input to get its value -->
   <input type="password" #password  id="password" placeholder="Password"  ngControl="password" required>
   <br><br><br>
   <button  type="submit"  id="button" class="btn btn-default"  style="text-align:center" [disabled]="!heroForm.form.valid">LogIn</button>
  

</form>



</div>
`,

styleUrls: ['app/login/login.css'],

})



export class LoginComponent {
show=true;



 constructor(public authService: AuthService, public router: Router) {
    
  }


  
  onSubmit(name:string,password:string) {
     this.authService.checkAdmin(name);
     this.authService.login(name,password).subscribe(() => {
     
      if (this.authService.isLoggedIn) {
             
                  if (this.authService.addrouter &&  this.authService.admin){ this.router.navigate(['/addUpdate']);}
                  if (this.authService.addrouter &&  !this.authService.admin){ 
                                     this.router.navigate(['/filter']);
                                     alert("You are not administrtaor.You can not have access to add and upadate machine page")
                  }

                  if (this.authService.updateM &&  this.authService.admin){ this.router.navigate(['/update']);}
                  if (this.authService.updateM &&  !this.authService.admin){ 
                                    
                                     alert("You are not administrtaor.You can not have access to add and upadate machine page")
                                    this.router.navigate(['/filter']);
                }

               if (this.authService.firouter){this.router.navigate(['/filter']);}
               if(!this.authService.addrouter && !this.authService.updateM && !this.authService.firouter){this.router.navigate(['/filter']);}
        
  }
  else{
        this.show=false;
  }

 });
  }

  
  
    
}