import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FurnitureServiceService } from '../service/furniture-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private loginservice:FurnitureServiceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  

  
onLogin(){
  this.loginservice.logindetails(this.loginDetails.value).subscribe(
    (x)=>{
      if(x.role=="Admin"){
      alert("welcome "+x.role)
      this.loginservice.isAdmin=false;
      this.loginservice.isLogin=true;
      this.router.navigateByUrl("")
      
    }
    else{
      alert("welcome "+x.role)
      this.loginservice.isAdmin=true;
       this.loginservice.isLogin=false;
      this.router.navigateByUrl("")
      
    }}
    ,(x:Error)=>{if(x.name=="HttpErrorResponse"){
      alert("Invalid details")
    }
    }
  )
}
}
