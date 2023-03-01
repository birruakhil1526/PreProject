import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureServiceService {
  url:string="http://localhost:8084/register";
  url1:string="http://localhost:8084/login"
  url2:string="http://localhost:8083/save"
  url3:string="http://localhost:8083/products"
  url4:string="http://localhost:8083/delete"
  public isAdmin:boolean=false;
  public isLogin:boolean=false;
  public isCart:boolean=false;
  public isLogged:boolean=false;

  constructor(private httpclient:HttpClient ) { }

  registrationdetails(details:any):Observable<any>{
    return this.httpclient.post(this.url,details)
  }
  logindetails(details:any):Observable<any>{
    this.isAdmin=true
    return this.httpclient.post(this.url1,details);
    
  }
  addFurniture(details:any):Observable<any>{
    return this.httpclient.post(this.url2,details)
  }
  getAllProducts():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url3)
  }
  deleteproducts(title1:any):Observable<any>{
    return this.httpclient.delete(this.url4+"/"+title1)
  }
  
}
