import { Routes } from '@angular/router';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanAccess } from './guards/auth-guard';


export const routes: Routes = [
    {path:'',component:LoginComponent,title:"test"},
    {path:'dashboard',component:DashboardComponent,title:"Dashboard",canActivate:[CanAccess],children:[
        {path:'',redirectTo:"panel",pathMatch:"full"},
        {path:'panel',component:NavbarComponent,title:"Dashboard"} , {path:'products',component:NavbarComponent,title:"Dashboard"},
        {path:'category',component:NavbarComponent,title:"Dashboard"} , {path:'order',component:NavbarComponent,title:"Dashboard"},
    ]
}
];
