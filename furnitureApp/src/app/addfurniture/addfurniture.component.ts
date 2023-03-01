import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureServiceService } from '../service/furniture-service.service';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  addFurniture=this.fbr.group({
    productId:['',[Validators.required,Validators.maxLength(3)]],
    title1:['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    content1:['',[Validators.required,Validators.minLength(4)]],
    price:['',[Validators.required]]

  })
  get title1(){
    return this.addFurniture.get("title1")
  }
  get content1(){
    return this.addFurniture.get("content1");
  }
  get price(){
    return this.addFurniture.get("price")
  }
  get productId(){
    return this.addFurniture.get("productId")
  }
  
  constructor(private fbr:FormBuilder,private fsr:FurnitureServiceService,private ar:ActivatedRoute,private router:Router,private snackbar:MatSnackBar) {
    
   }
   message:any;
   action:any;
  addFurnitures(){
    console.log(this.addFurniture.value)
    this.fsr.addFurniture(this.addFurniture.value).subscribe(
      ()=>{
      this.message=this.title1?.value+" - added"
      this.action="OK"
      this.snackbar.open(this.message,this.action)
    }
      
    )
    this.router.navigateByUrl("")
      }
    
  

  ngOnInit(): void {
  }

}
