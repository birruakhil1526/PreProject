import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureServiceService } from '../service/furniture-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dataarray!:any;
  
  
  fetchedProducts!: any[];
  cartDetails=this.fb.group({
    quantity:[''],
    size:['']
  })
  get quantity(){
    return this.cartDetails.get("quantity")
  }
  get size(){
    return this.cartDetails.get("size")
  }

  constructor(public log:FurnitureServiceService,private router:Router,private ar:ActivatedRoute,private fb:FormBuilder,private snackbar:MatSnackBar) {
    this.dataarray={title1:'',content1:'',price:''}
    
   }
  getAllProducts(){
    this.log.getAllProducts().subscribe((x:any[])=>{this.fetchedProducts=x})
  }
  addCart(){
    this.log.isCart=true;
   
  }
 
  message:any
  action:any
  addCart1(){
    
    //alert(this.quantity?.value+" & "+this.size?.value +" - "+"added to cart")
   this.message=this.quantity?.value+" & "+this.size?.value +" - "+"added to cart"
   this.action="thank you"
    this.snackbar.open(this.message, this.action);
    this.cartDetails.get("quantity")?.setValue("")
    this.cartDetails.get("size")?.setValue("")
    this.log.isCart=false;
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.ar.paramMap.subscribe(params=>{
      let id=params.get("productId")
      if(id==null){
        this.log.getAllProducts().subscribe();
      }
      else{
        this.log.deleteproducts(id).subscribe(()=>{alert("deleted")})
        this.message="deleted"
        this.action="ok"
        this.snackbar.open(this.message,this.action)
        this.router.navigateByUrl("");
  }
  
    })
    
   
  }
  

}
