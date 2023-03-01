import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FurnitureServiceService } from '../service/furniture-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userDetails=this.fbr.group({
    firstname:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4),Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    lastname:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4),Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    cpassword:['',[]],
    role:['',[Validators.required]]
    
  },{validators:this.checkpassword})

  constructor(private fbr:FormBuilder,private furnitureservice:FurnitureServiceService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  get firstname(){
    return this.userDetails.get('firstname')
  }
  get lastname()
  {
    return this.userDetails.get('lastname')
  }
  get email()
  {
    return this.userDetails.get('email')
  }
  get password(){
    return this.userDetails.get('password')
  }
  get cpassword(){
    return this.userDetails.get('cpassword')
  }
  get role(){
    return this.userDetails.get('role')
  }
  checkpassword(ac:AbstractControl):ValidationErrors|null
  {
    let pass=ac.get('password')?.value
    let cpass=ac.get('cpassword')?.value
    if(pass!=cpass){
        return{same:false}
    }
    return null;
  }
  message:any;
  action:any;

  registrationbody(){
    this.furnitureservice.registrationdetails(this.userDetails.value).subscribe(
      ()=>{
        this.message=this.email?.value+" - added"
        this.action="OK"
        this.snackbar.open(this.message,this.action)
    },
    (error:Error)=>{alert("User already exists : "+error.name)},
    )
    this.router.navigateByUrl("/login")
  }

}
