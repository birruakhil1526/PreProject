import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfurnitureComponent } from './addfurniture/addfurniture.component';
import { BodyComponent } from './body/body.component';
import { FurnitureguardGuard } from './guard/furnitureguard.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserbodyComponent } from './userbody/userbody.component';

const routes: Routes = [{
  path:'',
  component:BodyComponent
},
{
  path:"register",
  component:RegistrationComponent
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"user",
  component:UserbodyComponent

},
{
  path:"delete/:productId",
  component:BodyComponent,canActivate:[FurnitureguardGuard]
},
{
  path:"furniture",
  component:AddfurnitureComponent,canActivate:[FurnitureguardGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
